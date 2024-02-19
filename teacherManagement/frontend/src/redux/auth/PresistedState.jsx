import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const persistedStateSlice = createSlice({
  name: "persistedState",
  initialState,
  reducers: {
    clearPersistedState: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { clearPersistedState } = persistedStateSlice.actions;
export default persistedStateSlice.reducer;
