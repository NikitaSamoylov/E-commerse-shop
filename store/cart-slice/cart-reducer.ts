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
    removeItems: (state, action: PayloadAction<string[]>) => {
      return state.filter(el => !action.payload.includes(el.id))
    },
    increaseCount: (state, action: PayloadAction<string>) => {
      return state.map(el =>
        el.id.includes(action.payload) ?
          { ...el, count: el.count + 1 } :
          el
      )
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      return state.map(el =>
        el.id.includes(action.payload) ?
          { ...el, count: el.count - 1 } :
          el
      )
    },
  },
});


export const { addItem, removeItems, increaseCount, decreaseCount } = cartSlice.actions;