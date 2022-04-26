import { createSlice } from "@reduxjs/toolkit";

let initialItems = [];
let initialQuantity = 0;
if (localStorage.getItem("product")) {
  initialItems = JSON.parse(localStorage.getItem("product")).items;
  initialQuantity = JSON.parse(localStorage.getItem("product")).Quantity;
}

const initialState = {
  cardItems: initialItems ? initialItems : [],
  cardTotalQuantity: initialQuantity ? initialQuantity : 0,
  cardTotalAmount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    ADD_TO_CARD: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQuantity += 1;
      } else {
        state.cardItems.push({ ...action.payload, cardQuantity: 1 });
      }
      state.cardTotalQuantity += 1;
      localStorage.setItem(
        "product",
        JSON.stringify({
          items: state.cardItems,
          Quantity: state.cardTotalQuantity,
        })
      );
    },

    REMOVE_FROM_CARD: (state, action) => {
      const indexItem = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const quantityOfItem = state.cardItems[indexItem].cardQuantity;
      state.cardTotalQuantity -= quantityOfItem;
      state.cardItems.splice(indexItem, 1);

      localStorage.setItem(
        "product",
        JSON.stringify({
          items: state.cardItems,
          Quantity: state.cardTotalQuantity,
        })
      );
    },
  },
});

export const { ADD_TO_CARD, REMOVE_FROM_CARD } = cardSlice.actions;

export default cardSlice.reducer;
