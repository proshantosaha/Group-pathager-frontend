import Image from "next/image";
import React from "react";
import Styles from "./cartItem.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCart } from "../../../../context/cartContext";

const CartItem = ({ data }) => {
  const { deletFromCart } = useCart();
  return (
    <div className={Styles.CartItem}>
      <div className={Styles.CartItemtop}>
        <div>
          <Image
            src={data?.thumbnail?.data?.attributes?.formats.thumbnail.url}
            width={100}
            height={100}
          />
        </div>

        <div>
          {" "}
          <div> {data?.name}</div>
          <div>{data?.subtitle}</div>
        </div>

        <div>{data?.price}</div>
      </div>

      <div className={Styles.CartItemtop}>
        <div className={Styles.CartItemtop}>
          <div> quantity</div>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div>
          {" "}
          <button onClick={() => deletFromCart(data?.slug)}>
            {" "}
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
