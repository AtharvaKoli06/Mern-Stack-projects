import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { clearPersistedState } from "./PresistedState";

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const removeToken = () => {
  const axiosInstance = axios.create();
  delete axiosInstance.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
};

export const authLogout = createAsyncThunk(
  "student/Logout",
  async (accessToken, { rejectWithValue }) => {
    try {
      return await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken} `,
          },
        }
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
      removeToken();
      clearPersistedState();
    });
    builder.addCase(authLogout.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default LogoutSlice.reducer;
