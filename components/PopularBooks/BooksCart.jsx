import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
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
import { PaginationStyle } from "@/styles/paginationStyle";
import InputBase from "@mui/material/InputBase";
import PaginationPage from "../PaginationPage";
import SearchIcon from "@mui/icons-material/Search";
import useBookCard from "@/hooks/useBookCart";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  WraperButton,
} from "@/styles/cardStyle";

const BooksCart = () => {
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);
  const {
    books,
    navSearch,
    setNavSearch,
    isFavorite,
    setIsFavorite,
    addToCart,
  } = useBookCard();


  const handleChangeNav = (e) => {
    const searchText = e.target.value;
    const matchedBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setNavSearch(matchedBooks);
  };

  //pagination
  const endIndex = page * cardsPerPage;
  const startIndex = endIndex - cardsPerPage;
  const displayedBooks = navSearch.slice(startIndex, endIndex);

  //pagination handle
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  //wishlist
  const handleFavoriteToggle = (index) => {
    // Create a copy of the isFavorite array and toggle the value for the clicked card
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  //sorting
  const [sortOrder, setSortOrder] = useState("asc");
  // 'asc' bebohar kora hoy low to high, 'desc' for high to low

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <Box bgcolor="red" p="20px" my="20px" borderRadius="20px">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleChangeNav}
        />
      </Search>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#0096D1" }}>
        Popular Books
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <PaginationStyle>
          <PaginationPage
            totalBooks={books?.length}
            cardsPerPage={cardsPerPage}
            handlePageChange={handlePageChange}
          />
        </PaginationStyle>
        <div style={{ marginLeft: "auto" }}>
          <Select label="Sort By" value={sortOrder} onChange={handleSortChange}>
            <MenuItem value="asc">Low to High</MenuItem>
            <MenuItem value="desc">High to Low</MenuItem>
          </Select>
        </div>
      </Box>

      <Grid container spacing={3}>
        {displayedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ background: "#F3FCFF", minHeight: "100%" }}>
                      <CardMedia
                        component="img"
                        height="300" // Set height to "auto"
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
                        <Box sx={{display: "flex",
                  justifyContent: "space-between"}}>
                        <Typography variant="p">{book.stock}</Typography>
                        <Typography variant="h6" color="green" fontWeight="700">
                          ${book.price}
                        </Typography>
                        </Box>
                        <WraperButton>
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
                              color={
                                isFavorite[index] ? "secondary" : "default"
                              }
                              onClick={() => handleFavoriteToggle(index)}
                            >
                              {isFavorite[index] ? (
                                <FavoriteIcon style={{ color: "red" }} />
                              ) : (
                                <FavoriteBorderIcon />
                              )}
                            </IconButton>
                          </Typography>
                        </WraperButton>
                      </CardContent>
                    </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <PaginationStyle>
          <PaginationPage
            totalBooks={books?.length}
            cardsPerPage={cardsPerPage}
            handlePageChange={handlePageChange}
            hidePrevButton
            hideNextButton
          />
        </PaginationStyle>
      </Box>
    </Box>
  );
};

export default BooksCart;
