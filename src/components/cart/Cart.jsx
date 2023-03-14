import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  selectProducts,
  selectTotalPrice,
} from "../../slice/cartSlice";

function Cart() {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <>
      <div className="cartContainer">
        <h2>Cart</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>{product.price * product.quantity}</p>
            <button onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
          </div>
        ))}
        <div>Total: {totalPrice}</div>
      </div>
    </>
  );
}

export default Cart;
