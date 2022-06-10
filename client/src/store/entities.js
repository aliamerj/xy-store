import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth.store/authSlice";
import cartReducer from "./cart.store/cartSlice";

export default combineReducers({ cart: cartReducer, auth: authReducer });
