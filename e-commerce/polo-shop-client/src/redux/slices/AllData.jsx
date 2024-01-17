import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const cardInDetailsInfo = createAsyncThunk(
  "data/fetchData",
  async () => {
    try {
      return axios
        .get("https://6577dd93197926adf62ee4bd.mockapi.io/api/v1/productList")
        .then((res) => res.data);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
);

const cardsDetailSlice = createSlice({
  name: "cardDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(cardInDetailsInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(cardInDetailsInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(cardInDetailsInfo.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default cardsDetailSlice.reducer;
