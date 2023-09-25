import React, { useEffect, useState } from "react";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import PaginationPage from "../pagination";

const BooksCart = () => {
  const [books, setBooks] = useState([]);

  const [isFavorite, setIsFavorite] = useState([]);

  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const endIndex = page * cardsPerPage;
  const startIndex = endIndex - cardsPerPage;
  const displayedBooks = books.slice(startIndex, endIndex);

  useEffect(() => {
    // Fetch the JSON data from your file
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        // Initialize the isFavorite state with false for each card
        setIsFavorite(new Array(data.length).fill(false));
        setBooks(data);
      });
  }, []);

  //wishlist
  const handleFavoriteToggle = (index) => {
    // Create a copy of the isFavorite array and toggle the value for the clicked card
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  const [sortOrder, setSortOrder] = useState("asc");

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Box bgcolor="red" p="20px" my="20px" borderRadius="20px">
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#0096D1" }}>
        Popular Books
      </Typography>

      <Grid container spacing={3}>
        {displayedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ background: "#F3FCFF", minHeight: "100%" }}>
              <CardMedia
                component="img"
                height="400px" // Set height to "auto"
                objectFit="cover" // Maintain aspect ratio and fit
                image={book.Image}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography color="text.secondary">
                  by {book.authorname}
                </Typography>
                <Typography>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={book.rating}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
                <Typography variant="p">{book.stock}</Typography>
                <Typography variant="h6" color="green" fontWeight="700">
                  ${book.price}
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
                    sx={{ background: "white", color: "green" }}
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
        ))}
      </Grid>

      <PaginationPage
        totalBooks={books?.length}
        cardsPerPage={cardsPerPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default BooksCart;
