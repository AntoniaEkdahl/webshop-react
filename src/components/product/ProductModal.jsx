import Modal from "react-modal";
import "./ProductModal.css";
import { useEffect } from "react";

//Got an error and without this.
Modal.setAppElement("#root");

const ProductModal = ({ isOpen, handleClose, product }) => {
  // When the product is null it will no longer error, and the variables will be undefined.
  const { title, description, price, thumbnail } = product ?? {};

  // We add the ability to close the modal by pressing the escape key.
  //We’ll remove the event listener on the effect cleanup.
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <Modal
      className="modalContainer"
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <div>
        <button className="btn" onClick={handleClose}>
          Close
        </button>
      </div>
      <h2>{title}</h2>
      <p className="productDescription">{description}</p>
      <p className="productPrice">${price}</p>
      <img src={thumbnail} alt={title} className="productImg" />
    </Modal>
  );
};

export default ProductModal;
