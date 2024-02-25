import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCart } from "@/types/cart";

type TInitialState = TCart[];
let initialState: TInitialState = [
  {
    id: '3353535535',
    name: 'realme hello',
    price: 3434434,
    itemImg: 'https://sfkjsfk',
    count: 1,
    // color: '',
    colorName: 'grey',
    ram: 8,
  }
];

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