import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  fetchProducts,
  selectFilteredProducts,
} from "../../slice/productsSlice";
import Product from "./Product";

export default function Results() {
  const dispatch = useDispatch();
  const PRODUCTS = useSelector(selectProducts);
  const searchedProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    if (PRODUCTS.length === 0) {
      dispatch(fetchProducts());
    }
  });

  let products;

  if (searchedProducts.length > 0) {
    products = searchedProducts.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  } else {
    products = PRODUCTS.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  }

  return <div className="products">{products}</div>;
}
