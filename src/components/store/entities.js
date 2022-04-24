import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./card.store/cardSlice";

export default combineReducers({card : cardReducer})