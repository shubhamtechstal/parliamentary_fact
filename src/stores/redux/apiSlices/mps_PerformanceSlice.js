import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMpsPerformanceData = createAsyncThunk(
  'mpsPerformance/fetchData',
  async (
    {
      datasets = [],
      limit = '',
      bottom = 0,
      non_percentage = 0,
      key = 'default',
    } = {},
    { rejectWithValue }
  ) => {
    try {
      const params = new URLSearchParams();
      if (datasets.length) params.append('datasets', datasets.join(','));
      if (limit) params.append('limit', limit);
      if (bottom) params.append('bottom', bottom);
      if (non_percentage) params.append('non_percentage', non_percentage);

      const url = `https://parliamentryfact.revanshrenewable.com/API/mps_performance_data.php?${params.toString()}`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      return { data: result, datasets, key };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// export const fetchMpsPerformanceData = createAsyncThunk(
//   'mpsPerformance/fetchData',
//   async ({ datasets = [], limit = '', bottom = 0, non_percentage= 0 , key = 'default'} = {}, { rejectWithValue }) => {
//     try {
//       const params = new URLSearchParams();
//       if (datasets.length) params.append('datasets', datasets.join(','));
//       if (limit) params.append('limit', limit);
//       if (bottom) params.append('bottom', bottom);
//       if (non_percentage) params.append('non_percentage', non_percentage);

//       const url = `https://parliamentryfact.revanshrenewable.com/API/mps_performance_data.php?${params.toString()}`;
//       const response = await fetch(url);
//       if (!response.ok)
//         throw new Error(`HTTP error! Status: ${response.status}`);

//       const result = await response.json();
//       return { data: result, datasets, key }; // ensure datasets is always returned
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

export const fetchPopulerMpsData = createAsyncThunk(
  'populerMpsPerformance/fetchData',
  async (param, { rejectWithValue }) => {
    try {
      const url = `https://parliamentryfact.revanshrenewable.com/API/popular_mps.php`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      return { data: result }; // ensure datasets is always returned
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchConstituencyPopulerMps = createAsyncThunk(
  'constituencyPopulerMps/fetchData',
  async (param, { rejectWithValue }) => {
    try {
      const url = `https://parliamentryfact.revanshrenewable.com/API/popular_mps_constituency_performance.php`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      console.log('constituency_popular_mps result', result);
      return { data: result }; // ensure datasets is always returned
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialSubstate = {
  attendance_data: {},
  mp_debate_data: {},
  mp_fund_data: {},
  private_bill_data: {},
  question_data: {},
};

const mpsPerformanceSlice = createSlice({
  name: 'mpsPerformance',
  initialState: {
    // Full (non-keyed) main data
    attendance_data: [],
    mp_debate_data: [],
    mp_fund_data: [],
    private_bill_data: [],
    question_data: [],
    top_performance: [],
    popular_mps: [],
    loksabha_id: '',

    // Partial (keyed) datasets
    partial: {
      ...initialSubstate,
      loksabha_id: '',
    },

    loading: false,
    error: null,
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
        const { datasets = [], data, key = 'default' } = action.payload;

        // full-page load
        if (datasets.length === 0) {
          state.attendance_data = data.attendance_data ?? [];
          state.mp_debate_data = data.mp_debate_data ?? [];
          state.mp_fund_data = data.mp_fund_data ?? [];
          state.private_bill_data = data.private_bill_data ?? [];
          state.question_data = data.question_data ?? [];
          state.top_performance = data.top_performance ?? [];
          state.popular_mps = data.popular_mps ?? [];
          state.loksabha_id = data.loksabha_id ?? '';
        } else {
          datasets.forEach((datasetKey) => {
            if (data[datasetKey] !== undefined) {
              if (!state.partial[datasetKey]) {
                state.partial[datasetKey] = {};
              }
              state.partial[datasetKey][key] = data[datasetKey];
            }
          });

          if (data.loksabha_id !== undefined) {
            state.partial.loksabha_id = data.loksabha_id;
          }
        }
      })
      .addCase(fetchMpsPerformanceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// const mpsPerformanceSlice = createSlice({
//   name: 'mpsPerformance',
//   initialState: {
//     attendance_data: [],
//     mp_debate_data: [],
//     mp_fund_data: [],
//     private_bill_data: [],
//     question_data: [],
//     top_performance: [],
//     popular_mps: [],
//     loksabha_id: '',
//     loading: false,
//     error: null,
//     partial: {
//       attendance_data: [],
//       mp_debate_data: [],
//       mp_fund_data: [],
//       private_bill_data: [],
//       question_data: [],
//       top_performance: [],
//       popular_mps: [],
//     },
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMpsPerformanceData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMpsPerformanceData.fulfilled, (state, action) => {
//         state.loading = false;
//         const { datasets = [], data } = action.payload;

//         // If no datasets, update all top-level state (full page load)
//         if (datasets.length === 0) {
//           state.attendance_data = data.attendance_data ?? [];
//           state.mp_debate_data = data.mp_debate_data ?? [];
//           state.mp_fund_data = data.mp_fund_data ?? [];
//           state.private_bill_data = data.private_bill_data ?? [];
//           state.question_data = data.question_data ?? [];
//           state.top_performance = data.top_performance ?? [];
//           state.popular_mps = data.popular_mps ?? [];
//           state.loksabha_id = data.loksabha_id ?? '';
//         } else {
//           // Update partial state only for selected datasets
//           datasets.forEach((key) => {
//             if (data[key] !== undefined) {
//               state.partial[key] = data[key];
//             }
//           });
//           if (data.loksabha_id !== undefined) {
//             state.partial.loksabha_id = data.loksabha_id;
//           }
//         }
//       })

//       .addCase(fetchMpsPerformanceData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

const populerMpsSlice = createSlice({
  name: 'PopulerMpsData',
  initialState: {
    popular_mps: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopulerMpsData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchPopulerMpsData.fulfilled, (state, action) => {
        state.isError = false;
        state.popular_mps = action.payload.data.popular_mps ?? [];
        state.isLoading = false;
      })

      .addCase(fetchPopulerMpsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

const populerMpsConstituencySlice = createSlice({
  name: 'mpsConstituencyPerformance',
  initialState: {
    constituency_popular_mps: [],
    populerMpsLoading: false,
    populerMpsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConstituencyPopulerMps.pending, (state) => {
        state.populerMpsLoading = true;
        state.populerMpsError = null;
      })
      .addCase(fetchConstituencyPopulerMps.fulfilled, (state, action) => {
        state.populerMpsError = false;
        state.constituency_popular_mps =
          action.payload.data?.constituency_popular_mps ?? [];
        state.populerMpsLoading = false;
        // state.mp_fund_data = data.mp_fund_data ?? [];
      })
      .addCase(fetchConstituencyPopulerMps.rejected, (state, action) => {
        state.populerMpsLoading = false;
        state.populerMpsError = action.payload;
      });
  },
});

export const mpsPerformanceReducer = mpsPerformanceSlice.reducer;
export const populerMpsConstituencyReducer =
  populerMpsConstituencySlice.reducer;
export const populerMpsReducer = populerMpsSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchMpsPerformanceData = createAsyncThunk(
//   'mpsPerformance/fetchData',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         'https://parliamentryfact.revanshrenewable.com/API/mps_performance_data.php'
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response?.json();
//       return {
//         // attendanceDetails: result?.attendance_details ?? [],
//         data: result,
//       };
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// const mpsPerformanceSlice = createSlice({
//   name: 'mpsPerformance',
//   initialState: {
//     attendance_data: [],
//     mp_debate_data: [],
//     mp_fund_data: [],
//     private_bill_data: [],
//     question_data: [],
//     top_performance: [],
//     popular_mps: [],
//     loksabha_id: '',
//     loading: false
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMpsPerformanceData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMpsPerformanceData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.attendance_data = action.payload.data.attendance_data;
//         state.mp_debate_data = action.payload.data.mp_debate_data;
//         state.mp_fund_data = action.payload.data.mp_fund_data;
//         state.private_bill_data = action.payload.data.private_bill_data;
//         state.question_data = action.payload.data.question_data;
//         state.top_performance = action.payload.data.top_performance;
//         state.popular_mps = action.payload.data.popular_mps;
//         state.loksabha_id = action.payload.data.loksabha_id;
//       })
//       .addCase(fetchMpsPerformanceData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // export default mpsPerformanceSlice.reducer;

// export const mpsPerformanceReducer = mpsPerformanceSlice.reducer;
