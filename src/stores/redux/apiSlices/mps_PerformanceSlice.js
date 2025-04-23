import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMpsPerformanceData = createAsyncThunk(
  'pmtPerformance/fetchData',
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
      })
      .addCase(fetchMpsPerformanceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export default mpsPerformanceSlice.reducer;

export const mpsPerformanceReducer = mpsPerformanceSlice.reducer;
