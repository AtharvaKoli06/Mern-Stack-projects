import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const Login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        data
      );
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.res.data);
    }
  }
);
export const loginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    data: null,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(Login.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export const signUp = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        data
      );
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.res.data);
    }
  }
);
const signUpSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export const googleLogin = createAsyncThunk(
  "user/googleLogin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/googleLogin",
        data
      );
      return res.data;
    } catch (error) {
      throw rejectWithValue(error.res.data);
    }
  }
);
export const googleLoginSlice = createSlice({
  name: "userGoogleLogin",
  initialState: {
    loading: false,
    data: null,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(googleLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(googleLogin.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default signUpSlice.reducer;
