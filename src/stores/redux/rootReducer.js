import { combineReducers } from 'redux';

// Normal RTK slice
import { toastReducers } from './slices/toastSlice';

// RTK Query API slice
import { todoApiAction, todoApiReducer } from './apiSlices/todoApiSlice';
import { performanceReducer } from './apiSlices/pmt_PerformanceSlice';
import { dashboardNewsApiAction, dashboardNewsApiReducer } from './apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { newsLetterApiAction, newsLetterApiReducer } from './apiSlices/newsLetterApiSlice';

const rootReducers = combineReducers({
  toast: toastReducers,
  
  [todoApiAction.reducerPath]: todoApiReducer,
  [dashboardNewsApiAction.reducerPath]: dashboardNewsApiReducer,
  [newsLetterApiAction.reducerPath]:newsLetterApiReducer,
  pmtPerformance: performanceReducer
});

export default rootReducers;
