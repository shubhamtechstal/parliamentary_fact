import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSessionsFilterData = createAsyncThunk(
  'pmtPerformance/sessionsFilterData',
  async (params, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `https://parliamentryfact.revanshrenewable.com/API/date_session_filter_api.php?${queryString}`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
          mode: 'cors',
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return {
        data: result,
      };
    } catch (err) {
      console.error('Error in fetchSessionsFilterData:', err);
      return rejectWithValue(err.message);
    }
  }
);

export const fetchStatesNameData = createAsyncThunk(
  'pmtPerformance/statesNameData',
  async (params, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `https://parliamentryfact.revanshrenewable.com/API/state_list.php`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
          mode: 'cors',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      return {
        data: result,
      };
    } catch (err) {
      console.error('Error in fetchSessionsFilterData:', err);
      return rejectWithValue(err.message);
    }
  }
);

const sessionsFilterSlice = createSlice({
  name: 'pmt_sessions',
  initialState: {
    sessions: [],
    date_range: [],
    statesList: [],
    loksabha_id: '6',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionsFilterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessionsFilterData.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload.data.sessions;
        state.date_range = action.payload.data.date_range;
        state.loksabha_id = action.payload.data.loksabha_id;
      })
      .addCase(fetchSessionsFilterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchStatesNameData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatesNameData.fulfilled, (state, action) => {
        state.loading = false;
        state.statesList = action.payload.data?.data;
      })
      .addCase(fetchStatesNameData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const pmtSessionsReducer = sessionsFilterSlice.reducer;
