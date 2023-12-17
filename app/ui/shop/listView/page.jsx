import React, { useState, useEffect } from "react";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "@mui/joy/Slider";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
// import { useFetchData } from "@/hooks/useFetchData";
// import PaginationPage from "@/components/PaginationPage";
import Image from "next/image";
import { PaginationStyle } from "@/app/components/styles/paginationStyle";
import PaginationPage from "@/app/components/PaginationPage";
import { WraperButton } from "@/app/components/styles/cardStyle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginTop: 20,
  marginBottom: 20,
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
  border: "1px solid black",
  borderRadius: 10,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: 20,
  },
}));

// price reange scle
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 650,
    label: "650",
  },
  {
    value: 1300,
    label: "130",
  },
  {
    value: 1950,
    label: "1950",
  },
  {
    value: 2600,
    label: "2600",
  },
];

function priceValue(price) {
  return `${price}`;
}

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

// const initialValue = {
//   grid_view: true,
//   list_view: false,
// };

const view = {
  display: "",
  width: "",
  mx: "",
  justifyContent: "",
  backgroundColor: "",
};

const view2 = {
  display: "flex",
  width: "900px",
  mx: "auto",
  justifyContent: "space-around",
  backgroundColor: "red",
};

export default function ListView() {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [publisher, setPublisher] = useState("");
  const [price, setPrice] = useState([0, 650]);
  const [language, setLanguage] = useState("");
  const [isFavorite, setIsFavorite] = useState([]);
  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const openMobileMenu = () => setIsMobileMenuOpen(true);
  // const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // console.log(openMobileMenu, closeMobileMenu, isMobileMenuOpen);

  // console.log(sort,filter,publisher,price,language)

  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data?.data);
        setNavSearch(data?.data);

        setIsFavorite(new Array(data.length).fill(false));
      });
  }, []);

  //pagination
  const endIndex = page * cardsPerPage;
  const startIndex = endIndex - cardsPerPage;
  const displayedBooks = navSearch?.slice(startIndex, endIndex);

  //pagination handle
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={9}>
            {/* <button onClick={closeMobileMenu}> grid</button>{" "}
            <button onClick={openMobileMenu}> list</button> */}
            <Grid sx={{ flexGrow: 1 }}>
              {displayedBooks.map((book, index) => (
                <Grid xs={12} md={6} lg={4} key={index} sx={{ padding: 2 }}>
                  <Box sx={{ background: "#F3FCFF", minHeight: "100%" }}>
                    <Box
                      display="flex"
                      width="900px"
                      mx="auto"
                      justifyContent="space-around"
                      backgroundColor="red"
                      // className={isMobileMenuOpen ? { view } : { view2 }}
                    >
                      <Image
                        component="img"
                        width="200"
                        // height="300" // Set height to "auto"
                        objectFit="cover" // Maintain aspect ratio and fit
                        image={book.attributes.images?.data?.attributes.url}
                        alt={book.attributes.images?.data?.attributes.name}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {book.attributes.name}
                        </Typography>
                        <Typography color="text.secondary">
                          by {book.attributes.authorname}
                        </Typography>
                        <Typography>
                          <Rating
                            style={{ maxWidth: 180 }}
                            value={book.attributes.rating}
                            precision={0.5}
                            readOnly
                          />
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="p">
                            {book.attributes.stock}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="green"
                            fontWeight="700"
                          >
                            ${book.attributes.price}
                          </Typography>
                        </Box>
                        <WraperButton>
                          <Link href={`${book?.id}`}>
                            <Button
                              variant="contained"
                              color="primary"
                              startIcon={<ShoppingCartIcon />}
                              sx={{ background: "white", color: "green" }}
                            >
                              Detail
                            </Button>
                          </Link>
                          <Typography>
                            <IconButton
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
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            {/* <PaginationStyle>
              <PaginationPage
                totalBooks={books?.length}
                cardsPerPage={cardsPerPage}
                handlePageChange={handlePageChange}
              />
            </PaginationStyle> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
