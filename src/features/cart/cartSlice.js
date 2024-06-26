import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
    },
    clearCart: (state) => {},
    removeItem: (state, { payload }) => {},
    editItem: (state, { payload }) => {},
  },
});
