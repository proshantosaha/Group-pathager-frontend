import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Cart = ({ badgeContent, cart, setCart }) => {
  const [price, setPrice] = useState(0);
  return (
    <>
      <Box>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {cart.map((item) => (
            <div className="cart-box" key={item.id}>
              <div>
                <Badge badgeContent={badgeContent} color="error">
                  <LocalMallIcon />
                  <p>{item.title}</p>
                </Badge>
              </div>
              <div>
                <button>+</button>
                <button>-</button>
              </div>
              <div>
                <span>{item.price}</span>
                <button>Remove</button>
              </div>
            </div>
          ))}
        </IconButton>
      </Box>
    </>
  );
};

export default Cart;
