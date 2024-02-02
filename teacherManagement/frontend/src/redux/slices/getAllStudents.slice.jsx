import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const getAllStudents = createAsyncThunk("get/students", async () => {
  try {
    return await axios.get("http://localhost:8000/api/v1/student/allStudents");
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});
const allStudentsSlice = createSlice({
  name: "allStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default allStudentsSlice.reducer;
