"use client";

import React, { useState, useContext, useEffect } from "react";
// import CartContext from "@/context/CartContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Styles from "./NavbarStyles.module.css";

import MenuBar from "./Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/app/components/styles/cardStyle";
import { useCart } from "@/context/cartContext";
import { fetcher } from "@/app/components/utils/api";

// import { useProductContext } from "@/context/productContext";
// import Category from "@/pages/category/[slug]";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const { data } = useProductContext();
  const { cart } = useCart();

  const [categories, setCategories] = useState(null);

  const [showCatMenu, setShowCatMenu] = useState(false);
  // const { cart } = useContext(CartContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetcher("/api/categories?populate=*");
    console.log(data);
    setCategories(data);
  };

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href={"/ui/login"}>
        {" "}
        <MenuItem onClick={handleMenuClose}>login</MenuItem>
      </Link>

      <Link href={"/ui/rasister"}>
        {" "}
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <LocalMallIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Pathagar
          </Typography>

          <Box>
            {/* sx={{ display: { xs: "none", sm: "block" } }} */}

            {/* <MenuBar
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
            /> */}
            <nav>
              <MenuBar
                showCatMenu={showCatMenu}
                setShowCatMenu={setShowCatMenu}
                categories={categories}
              />

              {/* <ul className={Styles.navigationMenu}>
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
              </ul> */}
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
            <Link href={"/ui/cart"}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {
                  <Badge badgeContent={cart?.length || "0"} color="error">
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
              <Badge badgeContent={17} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            {/* mobail icons  */}
            <Box>
              <CloseIcon />
              <ArticleIcon />
            </Box>
            {/* mobail icons  */}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}