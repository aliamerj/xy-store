import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

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
    SIGN_OUT: (state, action) => {
      state.currentUser = null;
      storage.removeItem("root");
    },
  },
});

export const { SUCCESS_LOGIN, START_LOGIN, FAILURE_LOGIN, SIGN_OUT } =
  authSlice.actions;

export default authSlice.reducer;
