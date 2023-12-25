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
  CardActions,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Image from "next/image";
// import { getDiscountedPricePercentage } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { getDiscountedPricePercentage } from "../../../utils/helper";
import { useCart } from "../../../context/cartContext";
import styles from "./cards.module.css";

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
    <Box sx={{ width: "300px" }}>
      <Grid className={styles.cardsWrap} item>
        <Card
          // onClick={() => addToCartHandler(book)}

          sx={{}}
        >
          <div
            className={styles.cards}
            onClick={() => router.push(`/components/products/${id}`)}
          >
            <CardMedia
              component="img"
              // Set height to "auto"
              objectFit="cover" // Maintain aspect ratio and fit
              src={product?.thumbnail?.data?.attributes?.formats.thumbnail.url}
              // src={product?.thumbnail?.data?.attributes?.url}

              alt={product?.name}
              // width="200"
              height="250px"
            />

            <CardContent>
              <Typography variant="h5" component="div">
                {product?.name}
              </Typography>
              <Typography color="text.secondary" variant="h5" component="div">
                by {product?.authorname}
              </Typography>

              <Typography variant="p">{product?.stock}</Typography>

              <Typography variant="p" color="green" fontWeight="700">
                <Typography>${product?.price}</Typography>

                {product?.original_price && (
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="p">
                      {" "}
                      ${product?.original_price}
                    </Typography>
                    <br />
                    <Typography variant="p">
                      {getDiscountedPricePercentage(
                        product?.original_price,
                        product?.price
                      )}
                      % off
                    </Typography>
                  </Box>
                )}
              </Typography>
              <Typography>
                <Rating
                  style={{ maxWidth: 180 }}
                  rating={product?.rating}
                  precision={0.5}
                  readOnly
                />
              </Typography>
            </CardContent>
            <CardActions
              className={styles.carAnimaion}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",

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
                className={styles.cartButton}
              >
                add to cart
              </Button>

              <Typography>
                <IconButton
                // color={isFavorite[index] ? "secondary" : "default"}
                // onClick={() => handleFavoriteToggle(index)}
                >
                  {/* {isFavorite[index] ? (
                    <FavoriteIcon style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )} */}
                  <FavoriteBorderIcon />
                </IconButton>
              </Typography>
            </CardActions>
            <CardActions className={styles.carDetail}>
              <Button
                color="primary"
                // sx={{ background: "white", color: "green" }}
                onClick={() => router.push(`/components/products/${id}`)}
              >
                <Typography component="div"> View Details</Typography>
              </Button>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </Box>
    // </Link>
  );
};

export default Cards;
