import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducers from './redux/rootReducer';

import { todoApiAction } from './redux/apiSlices/todoApiSlice';
import { dashboardNewsApiAction } from './redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { newsLetterApiAction } from './redux/apiSlices/newsLetterApiSlice';

export const reduxStore = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      todoApiAction.middleware,
      dashboardNewsApiAction.middleware,
      newsLetterApiAction.middleware
    ]),
});

export const persistor = persistStore(reduxStore);
