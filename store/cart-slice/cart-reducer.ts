import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCart } from "@/types/cart";

type TInitialState = TCart[];
let initialState: TInitialState = [];

export const cartSlice = createSlice({
  name: '@@cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCart>) => {
      state.push(action.payload)
    },
  }
});

export const { addItem } = cartSlice.actions;