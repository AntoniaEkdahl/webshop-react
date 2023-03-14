import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Cart from "./components/cart/Cart";
import Results from "./components/product/Results";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
