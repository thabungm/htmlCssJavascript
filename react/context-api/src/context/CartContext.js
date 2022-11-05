import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (product) => {
    product.count = 1;
    cartItems.push(product);
    setCartItems([...cartItems]);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemsToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
