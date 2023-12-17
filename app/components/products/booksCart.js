"use client";

import React, { useContext, useEffect, useState } from "react";
// import { useProductContext } from "@/context/productContext";

// import CartContext from "@/context/CartContext";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PaginationPage from "../PaginationPage";
import SearchIcon from "@mui/icons-material/Search";
// import { PaginationStyle } from "@/styles/paginationStyle";
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
// import {
//   Search,
// SearchIconWrapper,
// StyledInputBase,
// WraperButton,
// } from "@/styles/cardStyle";
// import Cards from "./cards";
import Link from "next/link";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  WraperButton,
} from "@/app/components/styles/cardStyle";
import Cards from "@/app/ui/Cards/page";
// import { fetcher } from "@/utils/api";
// import PaginationPage from "@/components/PaginationPage";
import { useCart } from "@/context/cartContext";
import { PaginationLiStyle, PaginationStyle } from "../styles/paginationStyle";
import PaginationPage from "../PaginationPage";

export default function BooksCart() {
  // const { products, setProducts } = useProductContext();
  const { products, loading, addToCart, cart } = useCart();
  // console.log(addToCart);
  // console.log(cart);
  // {
  //   console.log(products);
  // }

  // {
  //   console.log(data);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const { data } = await fetcher(`/api/products?populate=*`);

  //   setProducts(data);
  // };

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  // const { data } = await fetcher("/api/products");
  //   setData(data);
  // };

  // { strapiData }
  // console.log(bookCart);
  // const { data } = useProductContext();

  const [books, setBooks] = useState([]);
  const [navSearch, setNavSearch] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(8);

  // const { addItemToCart, addItemDetail } = useContext(CartContext);

  // useEffect(() => {
  //   fetch("/Book.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsFavorite(new Array(data.length).fill(false));
  //       setBooks(data);
  //       setNavSearch(data);
  //     });
  // }, []);

  // const addItemDetailhandler = (e) => {
  //   addItemDetail({
  //     id: e.id,
  //     image: e.image,
  //     title: e.title,
  //     authorname: e.authorname,
  //     rating: e.rating,
  //     stock: e.stock,
  //     price: e.price,
  //   });
  // };
  // const addToCartHandler = (e) => {
  //   addItemToCart({
  //     id: e.id,
  //     image: e.image,
  //     title: e.title,
  //     authorname: e.authorname,
  //     rating: e.rating,
  //     stock: e.stock,
  //     price: e.price,
  //   });
  // };

  const handleChangeNav = (e) => {
    const searchText = e.target.value;
    const matchedBooks = books.filter((book) =>
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
    <Box bgcolor="red" p="20px" my="20px" borderRadius="20px">
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
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#0096D1" }}>
        Popular Books
      </Typography>
      {/* <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <PaginationStyle>
          <PaginationPage
            totalBooks={books?.length}
            cardsPerPage={cardsPerPage}
            handlePageChange={handlePageChange}
          />
        </PaginationStyle>
        <div style={{ marginLeft: "auto" }}>
          <Select label="Sort By">
            <MenuItem value="asc">Low to High</MenuItem>
            <MenuItem value="desc">High to Low</MenuItem>
          </Select>
        </div>
      </Box> */}
      {/* set loading just let products */}

      {loading ? (
        <div>
          <h2>Loading products</h2>
        </div>
      ) : (
        <Grid container spacing={3}>
          {/* {console.log(data)} */}

          {products?.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              {/* <Link href={`products/${item.slug}`}> */}
              <Cards
                key={item.id}
                product={item.attributes}
                id={item.id}
                slug={item.slug}
                // slug={slug}

                // index={item.index}
                // {...item}
                // title={item.attributes.name}
                // price={item.attributes.price}
                // authorname={item.attributes.authorname}
                // stock={item.attributes.stock}
                // rating={item.attributes.rating}
                // book={item}
              />
              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <PaginationStyle>
          <PaginationPage
            totalBooks={books?.length}
            cardsPerPage={cardsPerPage}
            handlePageChange={handlePageChange}
            hidePrevButton
            hideNextButton
          />
        </PaginationStyle>
      </Box>
    </Box>
  );
}

// export async function getStaticProps() {
//   const products = await fetcher("/api/products");

//   return {
//     props: { products },
//   };
// }

// export const getServerSideProps = async () => {
//   const products = await fetcher("/api/products");

//   return {
//     props: { products },
//   };
// };

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:1337/api/products");
//   const strapiData = await res.json();
//   console.log(data);

//   return {
//     props: {
//       strapiData,
//     },
//   };
// }

// <Grid item>
//   <Card
//     // onClick={() => addToCartHandler(book)}
//     sx={{ background: "#F3FCFF", minHeight: "100%" }}
//   >
//     <Box height="400px">
//       <img
//         component="img"
//         // Set height to "auto"
//         objectFit="cover" // Maintain aspect ratio and fit
//         src={Image}
//         alt={item.attributes.name}
//       />
//     </Box>
//     <CardContent>
//       <Typography variant="h5" component="div">
//         {item.attributes.name}
//       </Typography>
//       <Typography color="text.secondary">
//         by {item.attributes.name}
//       </Typography>
//       <Typography>
//         <Rating
//           style={{ maxWidth: 180 }}
//           rating={item.attributes.name}
//           precision={0.5}
//           readOnly
//         />
//       </Typography>
//       <Typography variant="p">{item.attributes.name}</Typography>
//       <Typography variant="h6" color="green" fontWeight="700">
//         ${item.attributes.name}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           mt: 3,
//           "& button": {
//             background: "white",
//             fontWeight: 700,
//             border: "1px solid grey",
//             borderRadius: 25,
//             color: "green",
//             transition: "background 0.3s, color 0.3s",
//             "&:hover": {
//               background: "green",
//               color: "white",
//             },
//           },
//         }}
//       >
//         {/* <Button
//         variant="contained"
//         color="primary"
//         startIcon={<ShoppingCartIcon />}
//         // sx={{ background: "white", color: "green" }}
//         onClick={() => addItemDetailPage(book)}
//       >
//         detail page
//       </Button> */}

//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<ShoppingCartIcon />}
//           // sx={{ background: "white", color: "green" }}
//           onClick={() => addToCartHandler(item)}
//         >

//           Add to Cart
//         </Button>

//         <Typography>
//           <IconButton
//             color={isFavorite ? "secondary" : "default"}
//             onClick={() => handleFavoriteToggle(index)}
//           >
//             {isFavorite ? (
//               <FavoriteIcon style={{ color: "red" }} />
//             ) : (
//               <FavoriteBorderIcon />
//             )}
//           </IconButton>
//         </Typography>
//       </Box>
//     </CardContent>
//   </Card>
// </Grid>
