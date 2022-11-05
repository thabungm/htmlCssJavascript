import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cartIcon">
      <img width="30px" src="./shopping-cart.png" />
      <div className="cartCount">{cartItems.length}</div>
    </div>
  );
};

export default CartIcon;
