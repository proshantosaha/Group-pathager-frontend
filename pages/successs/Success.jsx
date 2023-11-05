import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="">
      <div>
        <div className="">
          <div className="">Thanks for shopping with us!</div>
          <div className="">Your order has been placed successfully.</div>
          <div className="">
            For any product related query, drop an email to
          </div>
          <div className="">shoeshopcontact@shop.com</div>

          <Link href="/" className="">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
