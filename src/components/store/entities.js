import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart.store/cartSlice";

export default combineReducers({ cart: cartReducer });
