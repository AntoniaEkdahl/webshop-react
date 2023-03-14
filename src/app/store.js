import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../slice/productsSlice";
import cartSliceReducer from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSliceReducer,
    cart: cartSliceReducer,
  },
});
