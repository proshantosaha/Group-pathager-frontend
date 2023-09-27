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

const Cards = ({ item, bookhandleClick }) => {
  const [isFavorite, setIsFavorite] = useState([]);

  const { Image, index, title, price, authorname, stock, rating } = item;

  const handleFavoriteToggle = (index) => {
    // Create a copy of the isFavorite array and toggle the value for the clicked card
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  return (
    <Box>
      <Grid item>
        <Card sx={{ background: "#F3FCFF", minHeight: "100%" }}>
          <Box height="400px">
            <img
              component="img"
              // Set height to "auto"
              objectFit="cover" // Maintain aspect ratio and fit
              src={Image}
              alt={title}
            />
          </Box>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography color="text.secondary">by {authorname}</Typography>
            <Typography>
              <Rating
                style={{ maxWidth: 180 }}
                rating={rating}
                precision={0.5}
                readOnly
              />
            </Typography>
            <Typography variant="p">{stock}</Typography>
            <Typography variant="h6" color="green" fontWeight="700">
              ${price}
            </Typography>
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
                onClick={() => bookhandleClick(item)}
              >
                Add to Cart
              </Button>
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
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Cards;
