import React from "react";
import Image from "next/image";
import { Box, Typography, Rating } from "@mui/material";

export default function BookCart({ bookCarts }) {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        color: "#000000",
        padding: 2,
        height: "400Px",
        overflowY: "scroll",
      }}
    >
      {bookCarts.map((book, index) => (
        <Box key={book.id} sx={{ display: "flex", paddingY: 1 }}>
          <Typography sx={{ mr: 1 }}>{index + 1}</Typography>
          <Image src={book.image} alt={book.bookName} width={50} height={70} />
          <Box sx={{ ml: 2 }}>
            <Typography>{book.bookName}</Typography>
            <Typography>{book.authorName}</Typography>
            <Rating
              name="half-rating"
              defaultValue={book.rating}
              precision={0.5}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
