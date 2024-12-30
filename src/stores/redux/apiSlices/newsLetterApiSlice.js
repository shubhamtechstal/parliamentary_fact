import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsLetterApi = createApi({
  reducerPath: 'newsLetterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://parliamentryfact.revanshrenewable.com/API' }),
  tagTypes: [
    'NEWS_LETTER_DROPDOWN',
   'NEWS_LETTER_DATA'
  ],
  endpoints: (qb) => ({
    getNewsLetterLokSabhaDropdown: qb.query({
        query: () => ({
          url: '/fetch_loksabha.php',
          method: 'GET',
        }),
        invalidatesTags: ['NEWS_LETTER_DROPDOWN'], 
      }),
    getNewsLetterYearDropdown: qb.query({
        query: () => ({
          url: '/fetch_year.php',
          method: 'GET',
        }),
        invalidatesTags: ['NEWS_LETTER_DROPDOWN'], 
      }),
      getNewsLetterSessionDropdown: qb.query({
        query: (params) => ({
          url: `/fetch_session.php?${new URLSearchParams(params).toString()}`,
          method: 'GET',
        }),
        invalidatesTags: ['NEWS_LETTER_DROPDOWN'], 
      }),
      getNewsLetterData: qb.query({
        query: (params) => ({
          url: `/fetch_productivity.php?${new URLSearchParams(params).toString()}`,
          method: 'GET',
        }),
        invalidatesTags: ['NEWS_LETTER_DATA'], 
      }),
  }),
});


export const newsLetterApiReducer = newsLetterApi.reducer;

export const newsLetterApiAction = {
  middleware: newsLetterApi.middleware,
  reducerPath: newsLetterApi.reducerPath,
  getNewsLetterLokSabhaDropdown: newsLetterApi.useGetNewsLetterLokSabhaDropdownQuery,
  getNewsLetterYearDropdown:newsLetterApi.useGetNewsLetterYearDropdownQuery,
  getNewsLetterSessionDropdown:newsLetterApi.useLazyGetNewsLetterSessionDropdownQuery,
  getNewsLetterData : newsLetterApi.useLazyGetNewsLetterDataQuery
};

export default newsLetterApi;
