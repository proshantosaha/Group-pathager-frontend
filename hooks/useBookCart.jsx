import React, { useState, useEffect } from "react";
import { addToDb, getStoredBook } from "./database";

export default function useBookCart() {
  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(new Array(data.length).fill(false));
        setBooks(data);
        setNavSearch(data);
      });
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    if (books.length) {
      const saveCart = getStoredBook();
      const storeCard = [];
      for (const id in saveCart) {
        const addedProduct = books.find((book) => book.id === id);
        if (addedProduct) {
          const quantity = saveCart[id];
          addedProduct.quantity = quantity;
          storeCard.push(addedProduct);
        }
      }
      setCart(storeCard);
    }
  }, [books]);

  return {
    books,
    navSearch,
    setNavSearch,
    isFavorite,
    setIsFavorite,
    addToCart,
    cart,
  };
}
