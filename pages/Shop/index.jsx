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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GridViewIcon from "@mui/icons-material/GridView";
import DehazeIcon from "@mui/icons-material/Dehaze";

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
import PaginationPage from "@/components/PaginationPage";
import { PaginationStyle } from "@/styles/paginationStyle";
import { WraperButton } from "@/styles/cardStyle";
import Image from "next/image";
import Cards from "@/components/PopularBooks/cards";
import ListView from "./listView";
import { useFilterContext } from "@/context/filterContext";
// import { productionBrowserSourceMaps } from "@/next.config";

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

const initialValue = {
  grid_view: true,
  list_view: false,
};

export default function Shop() {
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
  // console.log(sort,filter,publisher,price,language)

  const [view, setView] = useState(false);

  const { sorting } = useFilterContext();

  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data?.data);
        setNavSearch(data?.data);
        // setGridView(data?.data);
        // setListView(data?.data);

        setIsFavorite(new Array(data.length).fill(false));
      });
  }, []);

  // price sorting

  // useFetchData("http://localhost:1337/api/products?populate=*", (data) => {
  //   setBooks(data?.data)
  //   setNavSearch(data?.data)
  //   setIsFavorite(new Array(data.length).fill(false));
  //   });

  const handleChangeNav = (e) => {
    const searchText = e.target.value;
    const matchedBooks = books?.filter((book) =>
      book?.authorname?.toLowerCase().includes(searchText.toLowerCase())
    );

    setNavSearch(matchedBooks);
  };

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
    <Box
      sx={{
        maxWidth: "1654px",
        mx: "auto",
      }}
    >
      <Separator />
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} sx={{ padding: 2 }}>
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
                  onChange={(e) => setSort(e.target.value)}
                >
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
          <Grid item xs={12} sm={6} md={9} sx={{ padding: 2 }}>
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
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ color: "#000000", padding: 2 }}>
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
                    onChange={handleChangeNav}
                  />
                </Search>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <FormControlLabel
                      value="jafor-wazed"
                      control={<Radio />}
                      label="Jafor Wazid"
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
                    onChange={(e) => setPublisher(e.target.value)}
                  >
                    <FormControlLabel
                      value="bangla-akademi"
                      control={<Radio />}
                      label="Bangla Akademi"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Separator />

              <Box sx={{ padding: 3, border: 1, borderRadius: 2 }}>
                <Slider
                  getAriaLabel={() => "Price Range"}
                  value={price}
                  onChange={(e, newValue) => setPrice(newValue)}
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
                    onChange={(e, newValue) => setLanguage(newValue)}
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
            <Box display="flex" justifyContent="space-between">
              <Box>
                {view === true ? (
                  <>
                    {" "}
                    <button onClick={() => setView(false)}>
                      {" "}
                      <GridViewIcon />
                      <DehazeIcon />
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button onClick={() => setView(true)}>
                      {" "}
                      <GridViewIcon />
                      <DehazeIcon />
                    </button>
                  </>
                )}
              </Box>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    // labelId="demo-simple-select-label"
                    name="sort"
                    id="sort"
                    onClick={sorting}
                  >
                    <MenuItem value={" "}>select Sorting type</MenuItem>
                    <MenuItem value={"low"}>Price - Low to High</MenuItem>
                    <MenuItem value={"high"}>Price - High to Low</MenuItem>
                    <MenuItem value={"disLowTOhigh"}>
                      Discount - Low to High
                    </MenuItem>
                    <MenuItem value={"disHighToLow"}>
                      Discount - High to Low
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {view === true ? (
              <>
                {" "}
                <ListView />
              </>
            ) : (
              <>
                {" "}
                <Grid container sx={{ flexGrow: 1 }}>
                  {displayedBooks.map((item) => (
                    <Cards
                      key={item.id}
                      product={item.attributes}
                      id={item.id}

                      // index={item.index}

                      // {...item}

                      // title={item.attributes.name}
                      // price={item.attributes.price}
                      // authorname={item.attributes.authorname}
                      // stock={item.attributes.stock}
                      // rating={item.attributes.rating}
                      // book={item}
                    />
                  ))}
                </Grid>
              </>
            )}

            <PaginationStyle>
              <PaginationPage
                totalBooks={books?.length}
                cardsPerPage={cardsPerPage}
                handlePageChange={handlePageChange}
              />
            </PaginationStyle>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// <Cards
// index={item.index}
// // {...item}
// title={item.attributes.name}
// price={item.attributes.price}
// authorname={item.attributes.authorname}
// stock={item.attributes.stock}
// rating={item.attributes.rating}
// book={item}
// />

// <Grid
// xs={12}
// md={6}
// lg={4}
// key={index}
// sx={{ padding: 2 }}
// width="600px"
// >
// <Box
//   sx={{
//     background: "#F3FCFF",
//     minHeight: "100%",
//   }}
//   // className={isMobileMenuOpen ? { view } : { view2 }}
// >
//   <Image
//     src="/img"
//     height="300" // Set height to "auto"
//     width="200"
//     objectFit="cover" // Maintain aspect ratio and fit
//     image={item.attributes.images?.data?.attributes.url}
//     alt={item.attributes.images?.data?.attributes.name}
//   />

//   {/* <CardContent> */}
//   <Typography variant="h5" component="div">
//     {item.attributes.name}
//   </Typography>
//   <Typography color="text.secondary">
//     by {item.attributes.authorname}
//   </Typography>
//   <Typography>
//     <Rating
//       style={{ maxWidth: 180 }}
//       value={item.attributes.rating}
//       precision={0.5}
//       readOnly
//     />
//   </Typography>
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "space-between",
//     }}
//   >
//     <Typography variant="p">
//       {item.attributes.stock}
//     </Typography>
//     <Typography variant="h6" color="green" fontWeight="700">
//       ${item.attributes.price}
//     </Typography>
//   </Box>
//   <WraperButton>
//     <Link href={`${item?.id}`}>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<ShoppingCartIcon />}
//         sx={{ background: "white", color: "green" }}
//       >
//         Detail
//       </Button>
//     </Link>
//     <Typography>
//       <IconButton onClick={() => handleFavoriteToggle(index)}>
//         {isFavorite ? (
//           <FavoriteIcon style={{ color: "red" }} />
//         ) : (
//           <FavoriteBorderIcon />
//         )}
//       </IconButton>
//     </Typography>
//   </WraperButton>
//   {/* </CardContent> */}
// </Box>

// </Grid>
