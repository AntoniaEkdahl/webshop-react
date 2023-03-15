import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product === newProduct
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }

      state.totalPrice += newProduct.price;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((product) => product === productId);

      if (product === 1) {
        state.products = state.products.filter(
          (product) => product !== productId
        );
      }
      if (product === 0) {
        return;
      } else {
        product.quantity--;
      }
      state.totalPrice -= product.price;
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
