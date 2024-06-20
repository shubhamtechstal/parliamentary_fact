import { createApi } from '@reduxjs/toolkit/query/react';
import { apiSliceInterceptor } from '../../apiSliceInterceptor';
import dashboardNewsParser from './dashboardNewsParser';

const dashboardNews = createApi({
  reducerPath: 'dashboardNews',
  baseQuery: apiSliceInterceptor.baseQueryWithInterceptor,
  tagTypes: [
    'DASHBOARD_NEWS',
    'HEADER_CATEGORY',
  ],
  endpoints: (qb) => ({
    getDashboardNews: qb.query({

      query: ({
        page,
        pageSize,
      } = {}) => {
        const params = {};
        if (pageSize && page) {
          params['page'] = page + 1;
          params['pageSize'] = pageSize;
        }
       
        return `/fetch_news.php?${new URLSearchParams(params).toString()}`;
      },
      providesTags: ['DASHBOARD_NEWS'],
    }),

    getHeaderCategories: qb.query({

      query: ({
        page,
        pageSize,
      } = {}) => {
        const params = {};
        if (pageSize && page) {
          params['page'] = page + 1;
          params['pageSize'] = pageSize;
        }
       
        return `/fetch_category.php?${new URLSearchParams(params).toString()}`;
      },
      providesTags: ['HEADER_CATEGORY'],
    }),

  }),
});


export const dashboardNewsApiReducer = dashboardNews.reducer;

export const dashboardNewsApiAction = {
  middleware: dashboardNews.middleware,
  
  reducerPath: dashboardNews.reducerPath,
  getDashboardNews: dashboardNews.useGetDashboardNewsQuery,
  getHeaderCategories: dashboardNews.useGetHeaderCategoriesQuery,
};

export default dashboardNews;
