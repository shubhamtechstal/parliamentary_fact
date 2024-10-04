import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducers from './redux/rootReducer';

import { todoApiAction } from './redux/apiSlices/todoApiSlice';
import { dashboardNewsApiAction } from './redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

export const reduxStore = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      todoApiAction.middleware,
      dashboardNewsApiAction.middleware,

    ]),
});

export const persistor = persistStore(reduxStore);
