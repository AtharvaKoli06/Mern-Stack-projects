import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const getAllAttendenceList = createAsyncThunk(
  "student/AllAttendence",
  async () => {
    try {
      return await axios.get(
        "http://localhost:8000/api/v1/student/allattendenceRecord"
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const getAttendenceSlice = createSlice({
  name: "attendenceList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAttendenceList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAttendenceList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getAllAttendenceList.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default getAttendenceSlice.reducer;
