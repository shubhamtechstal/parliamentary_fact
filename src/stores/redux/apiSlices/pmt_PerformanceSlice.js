import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPerformanceData = createAsyncThunk(
  "pmtPerformance/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://parliamentryfact.revanshrenewable.com/API/fetch_total_loksabha_percentage.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response?.json();
      return {
        attendanceDetails: result?.attendance_details ?? [],
        questionsData: result?.questions_data ?? [],
        govtBillCount: result?.govt_bill_totals ?? [],
        privateBillCount: result?.private_status_count ?? [],
        loksabhaName: result?.loksabha_name,
        data: result,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const performanceSlice = createSlice({
  name: "pmtPerformance",
  initialState: {
    attendanceDetails: [],
    questionsData:[],
    govtBillCount:[],
    privateBillCount:[],
    loksabhaName: "",
    pageData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerformanceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerformanceData.fulfilled, (state, action) => {
        state.loading = false;
        state.attendanceDetails = action.payload.attendanceDetails;
        state.questionsData = action.payload.questionsData;
        state.loksabhaName = action.payload.loksabhaName;
        state.govtBillCount = action.payload.govtBillCount;
        state.privateBillCount = action.payload.privateBillCount;
        state.pageData = action.payload.data;
      })
      .addCase(fetchPerformanceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export default performanceSlice.reducer;

export const performanceReducer = performanceSlice.reducer;
