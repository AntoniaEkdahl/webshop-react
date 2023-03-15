import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  selectProducts,
  selectTotalPrice,
  clearCart,
} from "../../slice/cartSlice";
import { Trash } from "phosphor-react";

function Cart() {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //If cart is empty this will render to user.
  if (products.length === 0) {
    return <div className="cartContainerEmpty">Cart is empty...</div>;
  }
  return (
    <>
      <div className="cartContainer">
        <h1>Cart</h1>
        {products.map((product) => (
          <div key={product.id} className="cartProductContainer">
            <div className="imgContainer">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="cartProductInfo">
              <p>
                <strong>{product.title}</strong>
              </p>
              <p>{product.quantity}</p>
              <p>${product.price * product.quantity}</p>
            </div>
            <div className="cartRemoveContainer">
              <button
                className="cartRemoveBtn"
                onClick={() => handleRemoveProduct(product)}
              >
                <Trash size={24} />
              </button>
            </div>
          </div>
        ))}
        <div className="cartProductTotalPrice">Total: ${totalPrice}</div>
        <button
          className="cartBtn"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear cart
        </button>
      </div>
    </>
  );
}

export default Cart;
