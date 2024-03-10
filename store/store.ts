import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { cartSlice } from "./cart-slice/cart-reducer";
import { modalFormSlice } from "./cart-slice/modalForm-reducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cartItem: cartSlice.reducer,
  modalForm: modalFormSlice.reducer,
})

const persistedReducer = persistReducer(
  persistConfig, rootReducer
);

// export const cartStore = () => {
export const cartStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// };

export const persistor = persistStore(cartStore);

export type AppStore = ReturnType<typeof cartStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
