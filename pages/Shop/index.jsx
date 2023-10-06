import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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

export default function Shop() {
  const [sort, setSort] = useState("best-seller");
  const [filter, setFilter] = useState("jafor-wazed");
  const [publisher, setPublisher] = useState("bangla-akademi");
  const [price, setPrice] = useState([0, 650]);
  const [language, setLanguage] = useState("bengoli");
  const [books, setBooks] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);

  const sortHandleChange = (event) => {
    setSort(event.target.value);
  };

  const filterHandleChange = (event) => {
    setFilter(event.target.value);
  };

  const publisherHandleChange = (event) => {
    setPublisher(event.target.value);
  };

  const priceHandleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const languageHandleChange = (event, newValue) => {
    setLanguage(newValue);
  };

  useEffect(() => {
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(new Array(data.length).fill(false));
        setBooks(data);
      });
  }, []);

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  return (
    <Box
      sx={{
        maxWidth: "1654px",
        mx: "auto",
      }}
    >
      <Separator />
      <Box>
        <Grid container >
          <Grid item xs={12} sm={6} md={3} sx={{ padding: 2}}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
                borderRadius: "10px 10px 0px 0px",
                padding: "10px 20px",
                color: "#000000",
                backgroundColor: "#c9c9c9",
              }}
            >
              <p>Sort</p>
              <p>Reset Sort</p>
            </Box>

            <Box
              style={{
                border: "1px solid black",
                borderTop: "0px",
                borderRadius: "0px 0px 10px 10px",
                padding: "20px 20px",
                color: "#000000",
              }}
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={sort}
                  onChange={sortHandleChange}
                >
                  <FormControlLabel
                    value="best-seller"
                    control={<Radio />}
                    label="Best Seller"
                  />
                  <FormControlLabel
                    value="new-relased"
                    control={<Radio />}
                    label="New Released"
                  />
                  <FormControlLabel
                    value="price-low-to-high"
                    control={<Radio />}
                    label="Price - Low to High"
                  />
                  <FormControlLabel
                    value="price-high-to-low"
                    control={<Radio />}
                    label="Price - High to Low"
                  />
                  <FormControlLabel
                    value="discount-low-to-high"
                    control={<Radio />}
                    label="Discount - Low to High"
                  />
                  <FormControlLabel
                    value="discount-high-to-low"
                    control={<Radio />}
                    label="Discount - High to Low"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={9} sx={{ padding: 2}}>
            <Card>
              <CardMedia
                  component="img"
                  height="340px"
                  objectFit="cover"
                  image="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Perahin_2-Antik_Mahmud-acaea-247673.png"
                  alt="Banner Image"
                />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container >
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: "#000000", padding: 2  }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid black",
                  borderRadius: "10px 10px 0px 0px",
                  padding: "10px 20px",
                  backgroundColor: "#c9c9c9",
                }}
              >
                <p>Filter</p>
                <p>Reset Filter</p>
              </Box>

              <Box
                border="1px solid black"
                borderTop="0px"
                borderRadius="0px 0px 10px 10px"
                padding="20px 20px"
              >
                <p>Author</p>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={filter}
                    onChange={filterHandleChange}
                  >
                    <FormControlLabel
                      value="jafor-wazed"
                      control={<Radio />}
                      label="Jafor Wazid"
                    />
                    <FormControlLabel
                      value="new-relased"
                      control={<Radio />}
                      label="New Released"
                    />
                    <FormControlLabel
                      value="price-low-to-high"
                      control={<Radio />}
                      label="Price - Low to High"
                    />
                    <FormControlLabel
                      value="price-high-to-low"
                      control={<Radio />}
                      label="Price - High to Low"
                    />
                    <FormControlLabel
                      value="discount-low-to-high"
                      control={<Radio />}
                      label="Discount - Low to High"
                    />
                    <FormControlLabel
                      value="discount-high-to-low"
                      control={<Radio />}
                      label="Discount - High to Low"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Separator />

              <Box
                border="1px solid black"
                borderRadius="10px"
                padding="20px 20px"
              >
                <p>Publisher</p>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={publisher}
                    onChange={publisherHandleChange}
                  >
                    <FormControlLabel
                      value="bangla-akademi"
                      control={<Radio />}
                      label="Bangla Akademi"
                    />
                    <FormControlLabel
                      value="new-relased"
                      control={<Radio />}
                      label="New Released"
                    />
                    <FormControlLabel
                      value="price-low-to-high"
                      control={<Radio />}
                      label="Price - Low to High"
                    />
                    <FormControlLabel
                      value="price-high-to-low"
                      control={<Radio />}
                      label="Price - High to Low"
                    />
                    <FormControlLabel
                      value="discount-low-to-high"
                      control={<Radio />}
                      label="Discount - Low to High"
                    />
                    <FormControlLabel
                      value="discount-high-to-low"
                      control={<Radio />}
                      label="Discount - High to Low"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Separator />

              <Box sx={{ padding: 3, border: 1, borderRadius: 2 }}>
                <Slider
                  getAriaLabel={() => "Price Range"}
                  value={price}
                  onChange={priceHandleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={priceValue}
                  marks={marks}
                  step={10}
                  min={0}
                  max={2600}
                />
              </Box>
              <Separator />

              <Box
                border="1px solid black"
                borderRadius="10px"
                padding="20px 20px"
              >
                <Box>
                  <p>Language</p>
                </Box>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={language}
                    onChange={languageHandleChange}
                  >
                    <FormControlLabel
                      value="bengoli"
                      control={<Radio />}
                      label="Bengoli"
                    />
                    <FormControlLabel
                      value="english"
                      control={<Radio />}
                      label="English"
                    />
                    <FormControlLabel
                      value="outhers-language"
                      control={<Radio />}
                      label="Outhers Language"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Separator />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={9}>
            <Grid container sx={{ flexGrow: 1 }}>
              {books.map((book, index) => (
                <Grid xs={12} md={6} lg={4} key={index} sx={{ padding: 2}}>
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
                        </Box>
                      </CardContent>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
