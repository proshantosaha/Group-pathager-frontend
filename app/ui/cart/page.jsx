"use client";

import React from "react";
import Styles from "./cart.module.css";
import { Box, Button } from "@mui/material";
import Link from "next/link";
// import CartItem from "@/pages/cart/cartItem/CartItem";
import Image from "next/image";
import CartItem from "./cartItem/CartItem";
import { useCart } from "@/context/cartContext";
const Cart = () => {
  const { cart, deletFromCart } = useCart();
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Box maxWidth="1654px" mx="auto">
      <div>Shopping cart</div>
      {/* cart content start */}
      <div className={Styles.cartContent}>
        {/* cart left content start */}
        <div className={Styles.cartContentwidth}>
          <div>cart items</div>
          {/* <CartItem /> */}
          {/* data={item} key={item.id} */}
          {cart.map((item) => {
            return <CartItem data={item} key={item.id} />;
          })}
        </div>
        {/* cart left content end */}

        {/* cart right content start */}
        <div className={Styles.cartContentwidth}>
          <div>summary</div>
          <div>
            <div className={Styles.sumaryprice}>
              <div>Subtotal</div>
              <div>${totalPrice}</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </div>
          </div>
          <div>
            <Box>
              {/* <Link href={`../../components/PopularBooks/cart.jsx`}> */}
              <Button
                variant="contained"
                // startIcon={<ShoppingCartIcon />}
                onClick={() => addToCart(id, amount, product)}
                sx={{
                  background: "white",
                  color: "green",
                  borderRadius: "30px",
                  "&:hover": {
                    background: "green",
                    color: "white",
                  },
                }}
              >
                Checkout
              </Button>
              {/* </Link> */}
            </Box>
          </div>
        </div>
      </div>
      {/* cart content end */}

      <div className={Styles.cartContentCheckOut}>
        <Image width={300} height={300} />
        <span>your cart is empty</span>
        <span>
          Looks like you have not added anthing in your cart.
          <br />
          go ahead and explore to categories
        </span>
        <Box>
          <Link href={"/"}>
            <Button
              variant="contained"
              // startIcon={<ShoppingCartIcon />}
              // onClick={() => addToCart(id, amount, product)}
              sx={{
                background: "white",
                color: "green",
                borderRadius: "30px",
                "&:hover": {
                  background: "green",
                  color: "white",
                },
              }}
            >
              Checkout
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default Cart;
