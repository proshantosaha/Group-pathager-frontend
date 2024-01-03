"use client";

import React, { useContext, useEffect, useState } from "react";
// import { useProductContext } from "@/context/productContext";

// import CartContext from "@/context/CartContext";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
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

import Link from "next/link";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  WraperButton,
} from "../styles/cardStyle";
import Cards from "../../ui/Cards/page";
import { useCart } from "../../../context/cartContext";
import PaginationPage from "../PaginationPage";
import { PaginationStyle } from "../styles/paginationStyle";
// import { Search } from "../styles/cardStyle";

export default function BooksCart() {
  // const { products, setProducts } = useProductContext();
  const { products, loading, addToCart, cart, navSearch, setNavSearch } =
    useCart();

  // const [books, setBooks] = useState([]);
  // const [navSearch, setNavSearch] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);

  console.log(navSearch);
  const handleChangeNav = (e) => {
    const searchText = e.target.value;
    const matchedBooks = products.filter((book) =>
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
    <Grid>
      <Box bgcolor="#b9f4f3" p="20px" my="20px" borderRadius="20px">
        {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
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
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#0096D1", my: 4, ml: 4 }}
        >
          Popular Books
        </Typography>

        {loading ? (
          <div>
            <h2>Loading products</h2>
          </div>
        ) : (
          <>
            <Grid container spacing={3}>
              {/* {console.log(data)} */}

              {displayedBooks?.map((item) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Box marginLeft="40px">
                    <Cards
                      key={item.id}
                      product={item.attributes}
                      id={item.id}
                      slug={item.slug}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        <PaginationStyle>
          <PaginationPage
            totalBooks={products?.length}
            cardsPerPage={cardsPerPage}
            handlePageChange={handlePageChange}
            // hidePrevButton
            // hideNextButton
          />
        </PaginationStyle>
      </Box>
    </Grid>
  );
}
