import { combineReducers } from 'redux';

// Normal RTK slice
import { toastReducers } from './slices/toastSlice';

// RTK Query API slice
import { todoApiAction, todoApiReducer } from './apiSlices/todoApiSlice';

const rootReducers = combineReducers({
  toast: toastReducers,
  
  [todoApiAction.reducerPath]: todoApiReducer,
});

export default rootReducers;
