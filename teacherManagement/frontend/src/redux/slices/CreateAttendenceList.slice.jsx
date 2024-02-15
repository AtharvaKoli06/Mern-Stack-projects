import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "",
  data: null,
  error: "",
};
export const createAttendence = createAsyncThunk(
  "students/Attendence",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/student/attendenceRecord",
        data
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const createAttendenceListSlice = createSlice({
  name: "attendence",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAttendence.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAttendence.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(createAttendence.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default createAttendenceListSlice.reducer;
