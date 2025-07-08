import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { appConstants } from 'helpers/constants/appConstants';
import { localStore } from '../localStore';
import { toastActions } from './slices/toastSlice';

const apiSliceInterceptor = {};

apiSliceInterceptor.baseQuery = fetchBaseQuery({
  baseUrl: appConstants.apiBaseURL,
  prepareHeaders: (headers) => {
    const token = localStore.getToken();
    if (token) {
      headers.set('Authorization', `${token}`);
    }
    return headers;
  },
});

apiSliceInterceptor.baseQueryWithRetry = retry(
  apiSliceInterceptor.baseQueryWithInterceptor,
  { maxRetries: 3 }
);

apiSliceInterceptor.baseQueryWithInterceptor = async (args, api, extraOptions) => {
  try {
    const result = await apiSliceInterceptor.baseQuery(args, api, extraOptions);

    if (result.error) {
      let toastMessage = 'Oops, Something went wrong. Please try again later';

      if (result.error.status === 401) {
        // api.dispatch(authActions.logout());
      }

      if (result.error?.data?.message) {
        toastMessage = result.error.data.message;
      }

      api.dispatch(
        toastActions.setToastData({
          message: toastMessage,
          variant: 'error',
        })
      );
    }
    return result;
  } catch (error) {
    console.log('error', error);
    toastActions.setToastData({
      message: 'Oops, Something went wrong. Please try again later',
      variant: 'error',
    });
    return error;
  }
};

export { apiSliceInterceptor };
