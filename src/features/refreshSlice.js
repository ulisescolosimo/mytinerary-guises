import { createSlice } from "@reduxjs/toolkit";

export const refreshSlice = createSlice({
  name: "refresh",
  initialState: {refreshState: false},
  reducers: {
    refresh: (state, action) => {
      state.refreshState = !state.refreshState
    },
  },
});

export const { refresh } = refreshSlice.actions

export default refreshSlice.reducer