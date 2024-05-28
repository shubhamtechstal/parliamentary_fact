import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducerName = 'toast';
const initialState = {
  open: false,
  message: '',
  variant: '',
  isAuthenticated: true,
};

const toastSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setToastData: (state, action) => ({
      open: true,
      message: action.payload.message,
      variant: action.payload.variant,
    }),
    resetToastData: () => ({
      ...initialState,
    }),
  },
});

export const toastActions = toastSlice.actions;
export const toastReducers = persistReducer(
  { key: reducerName, storage, whitelist: [] },
  toastSlice.reducer
);
