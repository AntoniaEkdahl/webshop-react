import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, fetchProducts } from "../../slice/productsSlice";
import Product from "./Product";

export default function Results(props) {
  const dispatch = useDispatch();
  const PRODUCTS = useSelector(selectProducts);

  const searchedProducts = props.filteredProducts;

  useEffect(() => {
    if (PRODUCTS.length === 0) {
      dispatch(fetchProducts());
    }
  });

  let products;

  if (searchedProducts) {
    products = searchedProducts.map((product) => {
      console.log(products);
      return <Product key={product.id} product={product} />;
    });
  } else {
    products = PRODUCTS.map((product) => {
      return <Product key={product.id} product={product} />;
    });
  }

  return <div className="products">{products}</div>;
}
