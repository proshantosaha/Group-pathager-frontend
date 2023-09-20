import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import NavbarStyles from "./NavbarStyles.module.css";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import FavoriteIcon from "@mui/icons-material/Favorite";

import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

// import MoreIcon from "@mui/icons-material/MoreVert";

import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // width: "auto",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
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
    width: "80ch",
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "40ch",
    // },
  },
}));

const Navbar2 = () => {
  return (
    <div>
       {/* className={NavbarStyles.grid} */}
      <Box  >
        <AppBar component={"nav"} sx={{ bgcolor: "#6DCEF5" }}>
          <Toolbar>
            <Typography color={"green"} variant="h6" component="div">
              Pathagar
            </Typography>

            <Box>
              {/* sx={{ display: { xs: "none", sm: "block" } }} */}
              <nav>
                <ul className={NavbarStyles.navigationMenu}>
                  <li className={NavbarStyles.navigationMenuLi}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={NavbarStyles.navigationMenuLi}>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li className={NavbarStyles.navigationMenuLi}>
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className={NavbarStyles.navigationMenuLi}>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </Box>
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ ml: "20px" }}>
              <IconButton
                // size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <LocalMallIcon />
                </Badge>
                <p>$0.00</p>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge sx={{ ml: "20px" }} badgeContent={17} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge sx={{ ml: "20px" }}>
                  <NightlightRoundIcon />
                </Badge>
              </IconButton>

              <Badge sx={{ ml: "20px" }}>
                <p>log in</p>
              </Badge>
              
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar2;
