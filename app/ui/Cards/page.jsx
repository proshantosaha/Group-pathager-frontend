"use client";

import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";

const Cards = ({ slug, id, product }) => {
  // console.log(booksData);
  const [isFavorite, setIsFavorite] = useState([]);
  const router = useRouter();
  const { addToCart, handleAddToCart } = useCart();

  // const { index, title, price, authorname, stock, rating }

  const handleFavoriteToggle = (index) => {
    // Create a copy of the isFavorite array and toggle the value for the clicked card
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  return (
    // <Link key={id} href={`/products/${product.slug}`}>
    <Box>
      <Grid item>
        <Card
          // onClick={() => addToCartHandler(book)}
          sx={{ background: "#F3FCFF", minHeight: "100%" }}
        >
          <CardContent>
            <div onClick={() => router.push(`/components/products/${id}`)}>
              <Box height="400px">
                <Image
                  component="img"
                  // Set height to "auto"
                  objectFit="cover" // Maintain aspect ratio and fit
                  src={
                    product?.thumbnail?.data?.attributes?.formats.thumbnail.url
                  }
                  // src={product?.thumbnail?.data?.attributes?.url}

                  alt={product?.name}
                  width="300"
                  height="500"
                />
              </Box>

              <Typography variant="h5" component="div">
                {product?.name}
              </Typography>
              <Typography color="text.secondary">
                by {product?.authorname}
              </Typography>
              <Typography>
                <Rating
                  style={{ maxWidth: 180 }}
                  rating={product?.rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
              <Typography variant="p">{product?.stock}</Typography>

              <Typography variant="h6" color="green" fontWeight="700">
                <p>${product?.price}</p>

                {product?.original_price && (
                  <>
                    <p>{product?.original_price}</p>
                    <p>
                      {getDiscountedPricePercentage(
                        product?.original_price,
                        product?.price
                      )}
                      % off
                    </p>
                  </>
                )}
              </Typography>
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                "& button": {
                  background: "white",
                  fontWeight: 700,
                  border: "1px solid grey",
                  borderRadius: 25,
                  color: "green",
                  transition: "background 0.3s, color 0.3s",
                  "&:hover": {
                    background: "green",
                    color: "white",
                  },
                },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                // sx={{ background: "white", color: "green" }}
                onClick={() => addToCart(product)}
              >
                add to cart
              </Button>
              {/* 
                <Typography>
                  <IconButton
                    color={isFavorite[index] ? "secondary" : "default"}
                    onClick={() => handleFavoriteToggle(index)}
                  >
                    {isFavorite[index] ? (
                      <FavoriteIcon style={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Typography> */}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
    // </Link>
  );
};

export default Cards;

// export const getServerSideProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const booksResponse = await res.json();
//   return {
//     props: {
//       booksData: booksResponse,
//     },
//   };
// };
