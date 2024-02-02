import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const createStudent = createAsyncThunk(
  "student/create",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/student/info",
        data
      );
    } catch (error) {
      throw rejectWithValue(error.res.data);
    }
  }
);
const studentsSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default studentsSlice.reducer;
