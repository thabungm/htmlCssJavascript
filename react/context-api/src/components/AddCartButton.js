import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const AddCartButton = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);
  return (
    <button
      onClick={() => {
        addItemsToCart(product);
      }}
      className="addCartButton"
    >
      Add to Cart
    </button>
  );
};

/*
list of items in cart
  Apple: 1 + 1
  Mango: 1


 */
export default AddCartButton;
