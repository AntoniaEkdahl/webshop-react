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
        (product) => product.id === newProduct.id
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
      const product = state.products.find((p) => p.id === productId);

      if (product === 1) {
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
      } else {
        product.quantity--;
      }
      state.totalPrice -= product.price;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
