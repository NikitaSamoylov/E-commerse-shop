import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCart } from "@/types/cart";
import { nanoid } from "@reduxjs/toolkit";

type TInitialState = TCart[];
let initialState: TInitialState = [];

export const cartSlice = createSlice({
  name: '@@cart',
  initialState: initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<TCart>) => {
        state.push(action.payload)
      },
      prepare: (cartProduct) => ({
        payload: {
          ...cartProduct, id: nanoid()
        }
      })
    },
    removeItems: (state, action) => {
      return state.filter(el => !action.payload.includes(el.id))
    }
  },
});


export const { addItem, removeItems } = cartSlice.actions;