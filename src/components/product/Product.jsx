import "./Product.css";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../slice/cartSlice";
import { Bag } from "phosphor-react";

const Product = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  //When user click on product it sets the state to that product and pass in the selected product ass the prop.
  //So modal know which product it is.
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
        <img src={product.thumbnail} alt={product.title} />
        <div className="description">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <div className="btnContainer">
          <button className="openModalBtn" onClick={() => setIsOpen(true)}>
            More information
          </button>
          <ProductModal
            handleClose={() => setIsOpen(false)}
            isOpen={isOpen}
            product={selectedProduct}
            key={product.id}
          />
          <button className="addToCartBtn" onClick={() => addTocart(product)}>
            <Bag size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
