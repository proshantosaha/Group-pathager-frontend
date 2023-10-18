"use client";

import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

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

  const addItemToCart = async ({
    id,
    image,
    title,
    authorname,
    rating,
    stock,
    price,
    quantity = 1,
  }) => {
    const item = {
      id,
      image,
      title,
      authorname,
      rating,
      stock,
      price,
      quantity,
    };
    console.log(item);
    const isItemExist = cart?.cartItems?.find((itm) => itm.id === item.id);

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
