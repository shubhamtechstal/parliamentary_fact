import { createApi } from '@reduxjs/toolkit/query/react';
import { apiSliceInterceptor } from '../../apiSliceInterceptor';
import dashboardNewsParser from './dashboardNewsParser';

const dashboardNews = createApi({
  reducerPath: 'dashboardNews',
  baseQuery: apiSliceInterceptor.baseQueryWithInterceptor,
  tagTypes: [
    'DASHBOARD_NEWS',
    'HEADER_CATEGORY',
    'FETCH_NEWS_BY_ID',
    'TOP_FIVE_NEWS',
    'LATEST_TOP_NEWS',
    'SEARCH_KEYWORD',
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

      query: ({id,url,sub_category} ) => {
        const params = {};
        if(id)params['id'] = id;
        if(url)params['url'] = url;
        if(sub_category)params['sub_category'] = sub_category;

       
        return `/get_news_by_id.php?${encodeURI(new URLSearchParams(params).toString())}`;
      },
      providesTags: ['FETCH_NEWS_BY_ID'],
    }),

    getTopFiveNews: qb.query({

      query: ({} = {}) => {
        const params = {};

        return `/get_top_news.php?${encodeURI(new URLSearchParams(params).toString())}`;
      },
      providesTags: ['TOP_FIVE_NEWS'],
    }),

    getLatestTopNews: qb.query({

      query: ({} = {}) => {
        const params = {};

        return `/latest_top_news.php?${encodeURI(new URLSearchParams(params).toString())}`;
      },
      providesTags: ['LATEST_TOP_NEWS'],
    }),

    getSearchKeyword: qb.query({

      query: ({keyword}) => {
        const params = {};
        if(keyword)params['keyword'] = keyword;


        return `/news_keyword.php?${encodeURI(new URLSearchParams(params).toString())}`;
      },
      providesTags: ['SEARCH_KEYWORD'],
    }),

  }),
});


export const dashboardNewsApiReducer = dashboardNews.reducer;

export const dashboardNewsApiAction = {
  middleware: dashboardNews.middleware,
  
  reducerPath: dashboardNews.reducerPath,
  getDashboardNews: dashboardNews.useGetDashboardNewsQuery,
  getHeaderCategories: dashboardNews.useGetHeaderCategoriesQuery,
  getNewsById: dashboardNews.useGetNewsByIdQuery,
  getTopFiveNews: dashboardNews.useGetTopFiveNewsQuery,
  getLatestTopNews: dashboardNews.useGetLatestTopNewsQuery,
  getSearchKeyword: dashboardNews.useGetSearchKeywordQuery,
};

export default dashboardNews;
