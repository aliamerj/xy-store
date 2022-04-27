import { createSlice } from "@reduxjs/toolkit";

let initialItems = [];
let initialQuantity,
  initialAmount = 0;
if (localStorage.getItem("product")) {
  initialItems = JSON.parse(localStorage.getItem("product")).items;
  initialQuantity = JSON.parse(localStorage.getItem("product")).quantity;
  initialAmount = JSON.parse(localStorage.getItem("product")).amount;
}

const initialState = {
  cartItems: initialItems ? initialItems : [],
  cartTotalQuantity: initialQuantity ? initialQuantity : 0,
  cartTotalAmount: initialAmount ? initialAmount : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += parseFloat(action.payload.price.formatted);

      localStorage.setItem(
        "product",
        JSON.stringify({
          items: state.cartItems,
          quantity: state.cartTotalQuantity,
          amount: state.cartTotalAmount,
        })
      );
    },

    REMOVE_ALL_FROM_CART: (state, action) => {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const quantityOfItem = state.cartItems[indexItem].cartQuantity;
      const ItemPrice =
        quantityOfItem * parseInt(action.payload.price.formatted);
      state.cartTotalQuantity -= quantityOfItem;
      state.cartItems.splice(indexItem, 1);
      state.cartTotalAmount -= ItemPrice;

      localStorage.setItem(
        "product",
        JSON.stringify({
          items: state.cartItems,
          quantity: state.cartTotalQuantity,
          amount: state.cartTotalAmount,
        })
      );
    },
    REMOVE_FROM_CART: (state, action) => {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const quantityOfItem = state.cartItems[indexItem].cartQuantity;
      if (quantityOfItem <= 1) {
        state.cartItems.splice(indexItem, 1);
      } else {
        state.cartItems[indexItem].cartQuantity -= 1;
      }
      state.cartTotalQuantity -= 1;
      state.cartTotalAmount -= parseFloat(action.payload.price.formatted);

      localStorage.setItem(
        "product",
        JSON.stringify({
          items: state.cartItems,
          quantity: state.cartTotalQuantity,
          amount: state.cartTotalAmount,
        })
      );
    },
  },
});

export const { ADD_TO_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART } =
  cartSlice.actions;

export default cartSlice.reducer;
