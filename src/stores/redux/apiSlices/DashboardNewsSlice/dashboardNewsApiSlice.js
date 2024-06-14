import { createApi } from '@reduxjs/toolkit/query/react';
import { apiSliceInterceptor } from '../../apiSliceInterceptor';
import dashboardNewsParser from './dashboardNewsParser';

const dashboardNews = createApi({
  reducerPath: 'dashboardNews',
  baseQuery: apiSliceInterceptor.baseQueryWithInterceptor,
  tagTypes: [
    'DASHBOARD_NEWS',
  ],
  endpoints: (qb) => ({
    getDashboardNews: qb.query({
      query: ({
        page,
        pageSize,
        sample_one,
        sample_two,
      }) => {
        const params = {};
        if (pageSize && ![null, undefined, ''].includes(page)) {
          params['page'] = page + 1;
          params['pageSize'] = pageSize;
        }
        if (sample_one) {
          params['sample_one'] = sample_one;
        }
        if (sample_two) {
          params['sample_two'] = sample_two;
        }
       
        return `/dummy_api?${new URLSearchParams(params).toString()}`;
      },
      transformResponse: (response,meta,arg) => dashboardNewsParser.parseDashboardNews(response,meta,arg),
      providesTags: ['DASHBOARD_NEWS'],
    }),

  }),
});

export const dashboardNewsApiReducer = dashboardNews.reducer;

export const dashboardNewsApiAction = {
  middleWare: dashboardNews.middleware,
  reducerPath: dashboardNews.reducerPath,
  getDashboardNews: dashboardNews.useGetDashboardNewsQuery,
};

export default dashboardNews;
