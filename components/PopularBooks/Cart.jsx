"use client";

import React, { useContext } from "react";
import CartContext from "@/contex/CartContext";
import Link from "next/link";
import Box from "@mui/material/Box";

const Cart = () => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

  return (
    <>
        <Box>
          <h2>
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>
        </Box>

      {cart?.cartItems?.length > 0 && (
        <Box>
          {cart?.cartItems?.map((cartItem) => (
            <Box>
              <Box>
                <Box>
                  <img src={cartItem.image} alt={cartItem.title} />
                  <p>
                    <Link href="#">{cartItem.title}</Link>
                  </p>
                </Box>
                <Box>
                  <Box>
                    <button onClick={() => decreaseQty(cartItem)}>
                      <span>−</span>
                    </button>
                    <input
                      type="number"
                      value={cartItem.quantity}
                      readOnly
                    ></input>
                    <button
                      data-action="increment"
                      onClick={() => increaseQty(cartItem)}
                    >
                      <span>+</span>
                    </button>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>{" "}
                    <p>${cartItem.price} / per item </p>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <button onClick={() => deleteItemFromCart(cartItem?.id)}>
                      Remove
                    </button>
                  </Box>
                </Box>
              </Box>
              <hr />
            </Box>
          ))}
          <ul>
            <li>
              <span>Amount before Tax:</span>
              <span>${amountWithoutTax.toFixed(2)}</span>
            </li>
            <li>
              <span>Total Units:</span>
              <span>
                {cart?.cartItems?.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                (Units)
              </span>
            </li>
            <li>
              <span>TAX:</span>
              <span>${taxAmount}</span>
            </li>
            <li>
              <span>Total price:</span>
              <span>${totalAmount}</span>
            </li>
          </ul>

          <Link href="">Continue</Link>
          <Link href="/">Back</Link>
        </Box>
      )}
    </>
  );
};

export default Cart;
