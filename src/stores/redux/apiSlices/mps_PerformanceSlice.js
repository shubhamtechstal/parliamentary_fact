import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMpsPerformanceData = createAsyncThunk(
  'mpsPerformance/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://parliamentryfact.revanshrenewable.com/API/mps_performance_data.php'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response?.json();
      return {
        // attendanceDetails: result?.attendance_details ?? [],
        data: result,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const mpsPerformanceSlice = createSlice({
  name: 'mpsPerformance',
  initialState: {
    mps_attendance_data: [],
    mp_debate_data: [],
    mp_fund_data: [],
    private_bill_data: [],
    question_data: [],
    top_performance: [],
    popular_mps: [],
    loksabha_id: '',
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMpsPerformanceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMpsPerformanceData.fulfilled, (state, action) => {
        state.loading = false;
        state.mps_attendance_data = action.payload.data.attendance_data;
        state.mp_debate_data = action.payload.data.mp_debate_data;
        state.mp_fund_data = action.payload.data.mp_fund_data;
        state.private_bill_data = action.payload.data.private_bill_data;
        state.question_data = action.payload.data.question_data;
        state.top_performance = action.payload.data.top_performance;
        state.popular_mps = action.payload.data.popular_mps;
        state.loksabha_id = action.payload.data.loksabha_id;
      })
      .addCase(fetchMpsPerformanceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export default mpsPerformanceSlice.reducer;

export const mpsPerformanceReducer = mpsPerformanceSlice.reducer;
