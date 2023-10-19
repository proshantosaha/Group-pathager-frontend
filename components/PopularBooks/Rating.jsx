import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Rating({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index} >
        {stars >= index + 1  ? (
          <FaStar style={{color: "orange"}} />
        ) : stars >= index + 0.5 ? (
          <FaStarHalfAlt style={{color: "orange"}} />
        ) : (
          <AiOutlineStar style={{color: "orange", fontSize: 19, fontWeith: "bold"}} />
        )}
      </span>
    );
  });
  return <div style={{display: "flex", alignItem: "center", gap: 3 }}>{ratingStar}</div>;
}
