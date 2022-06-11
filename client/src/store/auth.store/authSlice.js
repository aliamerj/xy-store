import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    START_LOGIN: (state, action) => {
      state.isFetching = true;
    },
    SUCCESS_LOGIN: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    FAILURE_LOGIN: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
      state.error = true;
    },
  },
});

export const { SUCCESS_LOGIN, START_LOGIN, FAILURE_LOGIN } = authSlice.actions;

export default authSlice.reducer;
