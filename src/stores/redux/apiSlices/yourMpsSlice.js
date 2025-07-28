// src/redux/slices/yourMpsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'helpers/utills/apiUtils';

export const fetchYourMpsList = createAsyncThunk(
  'yourMps/fetchList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/mps_list_api.php`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result?.data; // This is an array of MPs
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchMpDetailsById = createAsyncThunk(
  'yourMps/fetchMpDetailsById',
  async (mpId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/fetch_mps_details.php?mp_id=${mpId}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const yourMpsSlice = createSlice({
  name: 'yourMps',
  initialState: {
    list: [],
    loading: false,
    error: null,
    mpDetails: {},
    mpDetailsLoading:false,
    mpDetailsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYourMpsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYourMpsList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchYourMpsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       // MP Detail Fetch by ID
       .addCase(fetchMpDetailsById.pending, (state) => {
        state.mpDetailsLoading = true;
        state.mpDetailsError = null;
        state.mpDetails = {};
      })
      .addCase(fetchMpDetailsById.fulfilled, (state, action) => {
        state.mpDetailsLoading = false;
        state.mpDetails = action.payload;
      })
      .addCase(fetchMpDetailsById.rejected, (state, action) => {
        state.mpDetailsLoading = false;
        state.mpDetailsError = action.payload;
      });
  },
});

export const yourMpsReducer = yourMpsSlice.reducer;
