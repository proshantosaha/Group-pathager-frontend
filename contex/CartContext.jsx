"use client";

import { createContext, useState, useEffect } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // set cart to state
  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  // add to cart item
  const addItemToCart = async ({
    id,
    image,
    name,
    authorname,
    rating,
    stock,
    price,
    quantity = 1,
  }) => {
    const item = {
      id,
      image,
      name,
      authorname,
      rating,
      stock,
      price,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (itm) => itm.id === item.id
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((itm) =>
        itm.id === isItemExist.id ? item : itm
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((itm) => itm.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
