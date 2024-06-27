import { createApi } from '@reduxjs/toolkit/query/react';
import { apiSliceInterceptor } from '../../apiSliceInterceptor';
import dashboardNewsParser from './dashboardNewsParser';

const dashboardNews = createApi({
  reducerPath: 'dashboardNews',
  baseQuery: apiSliceInterceptor.baseQueryWithInterceptor,
  tagTypes: [
    'DASHBOARD_NEWS',
    'HEADER_CATEGORY',
    'FETCH_NEWS_BY_ID'
  ],
  endpoints: (qb) => ({
    getDashboardNews: qb.query({

      query: ({
        category,
        limit
      } = {}) => {
        const params = {};
        if(category)params['category'] = category;
        if(limit)params['limit'] = limit;

        return `/fetch_news.php?${encodeURI(new URLSearchParams(params).toString())}`;
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

    getNewsById: qb.query({

      query: ({id} ) => {
        const params = {};
        if(id)params['id'] = id;
       
        return `/get_news_by_id.php?${encodeURI(new URLSearchParams(params).toString())}`;
      },
      providesTags: ['FETCH_NEWS_BY_ID'],
    }),

  }),
});


export const dashboardNewsApiReducer = dashboardNews.reducer;

export const dashboardNewsApiAction = {
  middleware: dashboardNews.middleware,
  
  reducerPath: dashboardNews.reducerPath,
  getDashboardNews: dashboardNews.useGetDashboardNewsQuery,
  getHeaderCategories: dashboardNews.useGetHeaderCategoriesQuery,
  getNewsById: dashboardNews.useGetNewsByIdQuery
};

export default dashboardNews;
