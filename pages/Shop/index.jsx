import React, { useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import shop from "public/banner.png";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "@mui/joy/Slider";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginBottom: 10,
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

  return (
    <Box
      sx={{
        maxWidth: "1654px",
        mx: "auto",
      }}
    >
      <Toolbar />
      <Separator />

      <Box>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
                borderRadius: "10px 10px 0px 0px",
                padding: "0px 20px",
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
                padding: "0px 20px",
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
          <Grid item xs={12} sm={6} md={8}>
            <Box>
              <Image
                src={shop}
                alt="Banner Image"
                width={750}
                height={300}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Separator />

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            {/* <Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
                borderRadius: "10px 10px 0px 0px",
                padding: "0px 20px",
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
                padding: "0px 20px",
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
          </Box>
          <Separator /> */}

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
                borderRadius: "10px 10px 0px 0px",
                padding: "0px 20px",
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
              padding="0px 20px"
            >
              <Box>
                <p
                  style={{
                    margin: "0px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Author
                </p>
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
              padding="0px 20px"
            >
              <Box>
                <p
                  style={{
                    margin: "0px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Publisher
                </p>
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
              padding="0px 20px"
            >
              <Box>
                <p
                  style={{
                    margin: "0px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Language
                </p>
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
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Grid container sx={{ flexGrow: 1 }}>
              {Array.from(Array(9)).map((_, index) => (
                <Grid xs={12} sm={12} md={6} lg={4} key={index}>
                  <Box sx={{ width: "390px", height: "300px" }}>xs=2</Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
