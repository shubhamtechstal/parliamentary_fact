import { combineReducers } from 'redux';

// Normal RTK slice
import { toastReducers } from './slices/toastSlice';

// RTK Query API slice
import { todoApiAction, todoApiReducer } from './apiSlices/todoApiSlice';
import { dashboardNewsApiAction, dashboardNewsApiReducer } from './apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

const rootReducers = combineReducers({
  toast: toastReducers,
  
  [todoApiAction.reducerPath]: todoApiReducer,
  [dashboardNewsApiAction.reducerPath]: dashboardNewsApiReducer,
});

export default rootReducers;
