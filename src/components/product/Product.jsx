import "./Product.css";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../slice/cartSlice";

const Product = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  //When user click on product it sets the state to that product and pass in the selected product ass the prop.
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addTocart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <div
        className="product"
        onClick={() => {
          handleProductClick(product);
        }}
      >
        <img src={product.thumbnail} alt="productImg" />
        <div className="description">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <button onClick={() => setIsOpen(true)}>More information</button>
        <ProductModal
          handleClose={() => setIsOpen(false)}
          isOpen={isOpen}
          product={selectedProduct}
          key={product.id}
        />
        <button onClick={() => addTocart(product)}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
