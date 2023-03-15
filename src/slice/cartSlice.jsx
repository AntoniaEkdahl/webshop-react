import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalPrice: 0,
  },
  reducers: {
    //what
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === newProduct.id
      );

      //If the product already exist in cart add on quantity, or if its a new product we want to add it will get its own.
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push({ ...newProduct, quantity: 1 });
      }
      // counts the total price of all products.
      state.totalPrice += newProduct.price;
    },

    //We first checks if existingItem not undefined, If it is, then we check if the quantity property is equal to 1. If it is, then it removes the item from the array.
    // If quantity is greater than 1, then it decrements the quantity property.
    //We also subtracts the price from the totalPrice.
    removeProduct: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cartProducts = state.cartProducts.filter(
            (product) => product.id !== productId
          );
        } else {
          existingProduct.quantity--;
        }
        state.totalPrice -= existingProduct.price;
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;

/*

*/
