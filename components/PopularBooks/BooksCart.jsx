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
import Pagination from "@mui/material/Pagination";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PaginationStyle } from "@/styles/paginationStyle";
import InputBase from "@mui/material/InputBase";
import PaginationPage from "../PaginationPage";
import SearchIcon from "@mui/icons-material/Search";

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
  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);
  const [isFavorite, setIsFavorite] = useState([]);

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
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <PaginationStyle>
          <Pagination
            count={Math.ceil(books.length / cardsPerPage)}
            page={page}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
          />
        </PaginationStyle>
      </Box>
    </Box>
  );
};

export default BooksCart;
