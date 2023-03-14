import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchResults: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;
  }
);

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
