import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const authLogout = createAsyncThunk(
  "student/Logout",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        data
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const LogoutSlice = createSlice({
  name: "Logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authLogout.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authLogout.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default LogoutSlice.reducer;
