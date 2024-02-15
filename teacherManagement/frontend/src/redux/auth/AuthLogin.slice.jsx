import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const authLogin = createAsyncThunk(
  "student/Login",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("http://localhost:8000/api/v1/users/login", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default LoginSlice.reducer;
