import React, { useState, useContext } from "react";
import CartContext from "@/contex/CartContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Styles from "./NavbarStyles.module.css";
import { Search, SearchIconWrapper, StyledInputBase } from "@/styles/cardStyle";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          maxWidth: "1654px",
          bgcolor: "#6DCEF5",
          mx: "auto",
          borderRadius: "5px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Pathagar
          </Typography>

          <Box>
            <nav>
              <ul className={Styles.navigationMenu}>
                <li className={Styles.navigationMenuLi}>
                  <Link href="/">Home</Link>
                </li>
                <li className={Styles.navigationMenuLi}>
                  <Link href="/Shop">Shop</Link>
                </li>
                <li className={Styles.navigationMenuLi}>
                  <Link href={"/about"}>About</Link>
                </li>
                <li className={Styles.navigationMenuLi}>
                  <Link href={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className={Styles.search}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href={"/AddCart"}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {
                  <Badge
                    badgeContent={cart.cartItems?.length || "0"}
                    color="error"
                  >
                    <LocalMallIcon />
                  </Badge>
                }
              </IconButton>
            </Link>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={"0"} 
              color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
