import React from "react";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="">
            <div>
                <div className="">
                    <div className="">Payment failed!</div>
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

export default Failed;