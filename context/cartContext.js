import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  cosnt[(show, setShow)] = useState(true);

  return (
    <CartContext.Provider
      value={{ cart, setCart, warning, setWarning, show, setShow }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

export default CartProvider;
