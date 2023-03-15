import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchResults: [],
    searchtText: "",
    filteredProducts: [],
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// function that will fetch all the products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      return [];
    }
    let data = await response.json();
    return data.products;
  }
);

export const selectProducts = (state) => state.products.products;
export const selectSearchText = (state) => state.products.searchText;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const { setSearchText, setFilteredProducts } = productsSlice.actions;

export default productsSlice.reducer;
