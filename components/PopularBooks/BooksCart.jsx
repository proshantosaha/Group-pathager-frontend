import React, { useContext, useEffect, useState } from "react";
import CartContext from "@/context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaginationPage from "../PaginationPage";
import SearchIcon from "@mui/icons-material/Search";
import { PaginationStyle } from "@/styles/paginationStyle";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  WraperButton,
} from "@/styles/cardStyle";
import Cards from "./cards";

const BooksCart = () => {
  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(new Array(data.length).fill(false));
        setBooks(data);
        setNavSearch(data);
      });
  }, []);

  const addToCartHandler = (e) => {
    addItemToCart({
      id: e.id,
      image: e.image,
      title: e.title,
      authorname: e.authorname,
      rating: e.rating,
      stock: e.stock,
      price: e.price,
    });
  };

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
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
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
          <Select label="Sort By">
            <MenuItem value="asc">Low to High</MenuItem>
            <MenuItem value="desc">High to Low</MenuItem>
          </Select>
        </div>
      </Box>

      <Grid container spacing={3}>
        {displayedBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Cards book={book} addToCartHandler={addToCartHandler} />
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
