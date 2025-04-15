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

export const fetchQuestionDetailsData = createAsyncThunk( 
    "pmtPerformance/fetchQuestionDetailsData",
    async (params, { rejectWithValue }) => {
      try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(
          `https://parliamentryfact.revanshrenewable.com/API/questions_detail_api.php?${queryString}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return {
          questionDetails: result.qut_data,
        };
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );
export const fetchAttendanceDetailsData = createAsyncThunk( 
    "pmtPerformance/fetchAttendanceDetailsData",
    async (params, { rejectWithValue }) => {
      try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(
          `https://parliamentryfact.revanshrenewable.com/API/Attendance_detail_api.php?${queryString}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return {
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
    attendanceDetailsPageData: [],
    questionsData:[],
    govtBillCount:[],
    privateBillCount:[],
    loksabhaName: "",
    pageData: null,
    loading: false,
    error: null,
    questionDetails: [],   // 👈 Added
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
      })
    // Fetch question details data
      .addCase(fetchQuestionDetailsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionDetailsData.fulfilled, (state, action) => {
        state.loading = false;
        state.questionDetails = action.payload.questionDetails;
      })
      .addCase(fetchQuestionDetailsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    // Fetch attendanceDetails PageData details data
      .addCase(fetchAttendanceDetailsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceDetailsData.fulfilled, (state, action) => {
        state.loading = false;
        state.attendanceDetailsPageData = action.payload.data;
      })
      .addCase(fetchAttendanceDetailsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export const performanceReducer = performanceSlice.reducer;
