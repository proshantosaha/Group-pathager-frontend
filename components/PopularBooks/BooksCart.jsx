import React, { useEffect, useState } from "react";
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

import { PaginationStyle } from "@/styles/paginationStyle";
import InputBase from "@mui/material/InputBase";
import PaginationPage from "../PaginationPage";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./cards";
// import { AuthContext } from "@/context/AuthProvider";
import useAuth from "@/context/globalProvider";

// import Cart from "@/layout/Navbar/cart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#B0B4B4",
  "&:hover": {
    backgroundColor: "#A8A8A8",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },

    [theme.breakpoints.up("xl")]: {
      width: "80ch",
    },
  },
}));

const BooksCart = () => {
  const { cart, setCart } = useAuth();

  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);
  const [isFavorite, setIsFavorite] = useState([]);
  const [warning, setWarning] = useState(false);

  // const [present, setPresent] = useState();

  const handleChangeNav = (e) => {
    const searchText = e.target.value;
    const matchedBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setNavSearch(matchedBooks);
  };

  useEffect(() => {
    // Fetch the JSON data from your file
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        // Initialize the isFavorite state with false for each card
        setIsFavorite(new Array(data.length).fill(false));
        setBooks(data);
        setNavSearch(data);
      });
  }, []);

  //pagination
  const endIndex = page * cardsPerPage;
  const startIndex = endIndex - cardsPerPage;

  const displayedBooks = navSearch.slice(startIndex, endIndex);

  //pagination handle
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  //wishlist
  // const handleFavoriteToggle = (index) => {
  //   // Create a copy of the isFavorite array and toggle the value for the clicked card
  //   const updatedFavorites = [...isFavorite];
  //   updatedFavorites[index] = !updatedFavorites[index];
  //   setIsFavorite(updatedFavorites);
  // };

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (pageNumber) => {
    setPage(pageNumber);
  };

  // add to card function
  const bookhandleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 6000);
      return;
    }
    setCart([...cart, item]);
  };
  return (
    <>
      <Box bgcolor="red">
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
            <Select
              label="Sort By"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <MenuItem value="asc">Low to High</MenuItem>
              <MenuItem value="desc">High to Low</MenuItem>
            </Select>
          </div>
        </Box>

        <Grid container spacing={3}>
          {displayedBooks.map((item) => (
            <Cards
              key={item.id}
              item={item}
              bookhandleClick={bookhandleClick}
            />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <PaginationStyle>
            <PaginationPage
              count={Math.ceil(books.length / cardsPerPage)}
              page={page}
              onChange={handlePageChange}
              hidePrevButton
              hideNextButton
            />
          </PaginationStyle>
        </Box>
      </Box>
    </>
  );
};

export default BooksCart;
