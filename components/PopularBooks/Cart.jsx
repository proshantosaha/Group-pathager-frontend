"use client";

import React, { useContext } from "react";
import CartContext from "@/contex/CartContext";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Box sx={{ color: "#000000" }}>
      <Box>
        <h2>{cart?.cartItems?.length || 0} Item(s) in Cart</h2>
      </Box>

      {cart?.cartItems?.length > 0 && (
        <Box>
          {cart?.cartItems?.map((cartItem) => (
            <Box>
              <Box sx={{ paddingY: 5, display: "flex" }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Image
                    src={cartItem.image}
                    alt={cartItem.name}
                    width={100}
                    height={80}
                  />
                  <p>
                    <Link href="#">{cartItem.name}</Link>
                  </p>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: 4 }}>

                    <Button
                      variant="contained"
                      onClick={() => decreaseQty(cartItem)}
                    >
                      -
                    </Button>
                    <Button variant="contained">{cartItem.quantity}</Button>
                    <Button
                      variant="contained"
                      onClick={() => increaseQty(cartItem)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>{" "}
                  <p>${cartItem.price} / per item </p>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: 4 }}>
                    <Button
                      variant="contained"
                      sx={{ marginLeft: "40px" }}
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteItemFromCart(cartItem?.id)}
                    >
                      Remove
                    </Button>
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
    </Box>
  );
};

export default Cart;
