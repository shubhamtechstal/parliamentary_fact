import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducers from './redux/rootReducer';

import { todoApiAction } from './redux/apiSlices/todoApiSlice';

export const reduxStore = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      todoApiAction.middleware,
    ]),
});

export const persistor = persistStore(reduxStore);
