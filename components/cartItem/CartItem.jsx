import Image from "next/image";
import React from "react";
import Styles from "@/components/cartItem/cartItem.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CartItem = () => {
  return (
    <div className={Styles.CartItem}>
      <div className={Styles.CartItemtop}>
        <div>
          <Image width={100} height={100} />
        </div>

        <div>
          {" "}
          <div>proshanto saha</div>
          <div>golpo er boi</div>
        </div>

        <div>mrp : 2.00</div>
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
        <DeleteForeverIcon />
      </div>
    </div>
  );
};

export default CartItem;
