import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const productDetailsWithId = createAsyncThunk(
  "data/fetchDataWithId",
  async (_id) => {
    try {
      return await axios
        .get(`http://localhost:8000/api/v1/products/productsWithId/${_id}`)
        .then((res) => res.data);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
);

const cardsDetailWithIdSlice = createSlice({
  name: "cardDetailsWithId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetailsWithId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(productDetailsWithId.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(productDetailsWithId.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default cardsDetailWithIdSlice.reducer;
