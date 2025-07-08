import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFromAPI } from "helpers/utills/apiUtils";

// ---------- Thunks ----------
export const fetchPerformanceData = createAsyncThunk(
  "pmtPerformance/fetchPerformanceData",
  async (_, { rejectWithValue }) => {
    const result = await fetchFromAPI("fetch_total_loksabha_percentage.php", null, rejectWithValue);
    return {
      attendanceDetails: result?.attendance_details ?? [],
      questionsData: result?.questions_data ?? [],
      govtBillCount: result?.govt_bill_totals ?? [],
      privateBillCount: result?.private_status_count ?? [],
      loksabhaName: result?.loksabha_name,
      data: result,
    };
  }
);

export const fetchQuestionDetailsData = createAsyncThunk(
  "pmtPerformance/fetchQuestionDetailsData",
  async (params, { rejectWithValue }) => {
    const result = await fetchFromAPI("questions_detail_api.php", params, rejectWithValue);
    return { questionDetails: result?.qut_data ?? [] };
  }
);

export const fetchAttendanceDetailsData = createAsyncThunk(
  "pmtPerformance/fetchAttendanceDetailsData",
  async (params, { rejectWithValue }) => {
    const result = await fetchFromAPI("Attendance_detail_api.php", params, rejectWithValue);
    return { data: result ?? [] };
  }
);
// Adjurnment
export const fetchAdjurnmentsData = createAsyncThunk(
  "pmtPerformance/fetchAdjurnmentsData",
  async (params, { rejectWithValue }) => {
    const result = await fetchFromAPI("get_adjouned_data.php", params, rejectWithValue);
    return { data: result ?? [] };
  }
);
// get_walkout_data
export const fetchwalkoutData = createAsyncThunk(
  "pmtPerformance/fetchwalkoutData",
  async (params, { rejectWithValue }) => {
    const result = await fetchFromAPI("get_walkout_data.php", params, rejectWithValue);
    return { data: result ?? [] };
  }
);
// fetch_interuption_data
export const fetchInteruptionData = createAsyncThunk(
  "pmtPerformance/fetchInteruptionData",
  async (params, { rejectWithValue }) => {
    const result = await fetchFromAPI("fetch_interuption_data.php", params, rejectWithValue);
    return { data: result ?? [] };
  }
);

// ---------- Slice ----------
const initialState = {
  attendanceDetails: [],
  attendanceDetailsPageData: [],
  questionsData: [],
  govtBillCount: [],
  privateBillCount: [],
  loksabhaName: "",
  pageData: null,
  loading: false,
  error: null,
  attendanceLoading: false,
  questionsLoading: false,
  questionDetails: [],
  adjurnmentsData:[],
  adjurnmentLoading: false,
  walkoutData:[],
  walkoutLoading: false,
  interuptionData:[],
  interuptionLoading: false,
};

const performanceSlice = createSlice({
  name: "pmtPerformance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ✅ fetchPerformanceData
      .addCase(fetchPerformanceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerformanceData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.attendanceDetails = payload.attendanceDetails;
        state.questionsData = payload.questionsData;
        state.loksabhaName = payload.loksabhaName;
        state.govtBillCount = payload.govtBillCount;
        state.privateBillCount = payload.privateBillCount;
        state.pageData = payload.data;
      })
      .addCase(fetchPerformanceData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // ✅ fetchQuestionDetailsData
      .addCase(fetchQuestionDetailsData.pending, (state) => {
        state.questionsLoading = true;
        state.error = null;
      })
      .addCase(fetchQuestionDetailsData.fulfilled, (state, { payload }) => {
        state.questionsLoading = false;
        state.questionDetails = payload.questionDetails;
      })
      .addCase(fetchQuestionDetailsData.rejected, (state, { payload }) => {
        state.questionsLoading = false;
        state.error = payload;
      })

      // ✅ fetchAttendanceDetailsData
      .addCase(fetchAttendanceDetailsData.pending, (state) => {
        state.attendanceLoading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceDetailsData.fulfilled, (state, { payload }) => {
        state.attendanceLoading = false;
        state.attendanceDetailsPageData = payload.data;
      })
      .addCase(fetchAttendanceDetailsData.rejected, (state, { payload }) => {
        state.attendanceLoading = false;
        state.error = payload;
      })

      // ✅ fetchwalkoutData
      .addCase(fetchwalkoutData.pending, (state) => {
        state.walkoutLoading = true;
        state.walkout_error = null;
      })
      .addCase(fetchwalkoutData.fulfilled, (state, { payload }) => {
        state.walkoutLoading = false;
        state.walkoutData = payload.data;
      })
      .addCase(fetchwalkoutData.rejected, (state, { payload }) => {
        state.walkoutLoading = false;
        state.walkout_error = payload;
      })

      // ✅ fetchInteruptionData
      .addCase(fetchInteruptionData.pending, (state) => {
        state.interuptionLoading = true;
        state.walkout_error = null;
      })
      .addCase(fetchInteruptionData.fulfilled, (state, { payload }) => {
        state.interuptionLoading = false;
        state.interuptionData = payload.data;
      })
      .addCase(fetchInteruptionData.rejected, (state, { payload }) => {
        state.interuptionLoading = false;
        state.walkout_error = payload;
      })

      // ✅ fetchAdjurnmentsData
      .addCase(fetchAdjurnmentsData.pending, (state) => {
        state.adjurnmentLoading = true;
        state.adjurnment_error = null;
      })
      .addCase(fetchAdjurnmentsData.fulfilled, (state, { payload }) => {
        state.adjurnmentLoading = false;
        state.adjurnmentsData = payload.data;
      })
      .addCase(fetchAdjurnmentsData.rejected, (state, { payload }) => {
        state.adjurnmentLoading = false;
        state.adjurnment_error = payload;
      });
  },
});

export const performanceReducer = performanceSlice.reducer;
