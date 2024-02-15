import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const authRegister = createAsyncThunk(
  "student/Register",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/users/register",
        data
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const RegisterSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default RegisterSlice.reducer;
