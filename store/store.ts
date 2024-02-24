import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice/cart-reducer";

export const cartStore = () => {
  return configureStore({
    reducer: {
      cartItem: cartSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof cartStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
