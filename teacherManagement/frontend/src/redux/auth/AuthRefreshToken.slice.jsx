import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const authRefreshToken = createAsyncThunk(
  "student/RefreshToken",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch();
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/users/refresh-token",
        data
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const refreshTokenSlice = createSlice({
  name: "RefreshToken",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authRefreshToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authRefreshToken.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authRefreshToken.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default refreshTokenSlice.reducer;
