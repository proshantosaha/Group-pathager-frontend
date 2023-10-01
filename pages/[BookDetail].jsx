import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CartContext from "@/contex/CartContext";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function BookDetail() {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  const Id = router.query.BookDetail;
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/Book.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      });
  }, []);

  const bookDetail = books?.find((book) => book.id === Id)

    // add cart handler
    const addToCartHandler = (book) => {
      addItemToCart({
        id: book.id,
        image: book.image,
        title: book.title,
        authorname: book.authorname,
        rating: book.rating,
        stock: book.stock,
        price: book.price,
      });
    };

  return (
    <Box>
      <Box sx={{ backgroundColor: "#0081FE" }}>
        <Container>
          <Typography
            variant="h1"
            textAlign="center"
            color="white"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Product Details
          </Typography>
        </Container>
      </Box>
      <Container sx={{ color: "#000000", paddingY: 8 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <CardMedia>
                <img src={bookDetail?.image} alt="details photo" />
              </CardMedia>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{bookDetail?.title}</Typography>
              <Typography variant="h6">By (author) {bookDetail?.authorname}</Typography>
              <Typography variant="h6">${bookDetail?.price}</Typography>
              <Typography variant="p">
                A comic book, also called ridiculous book, ridiculous magazine
                or simply ridiculous, is a publication that consists of comics
                art in the form of succe...
              </Typography>

              <Box sx={{ paddingY: "30px" }}>
                <Button variant="contained">-</Button>
                <Button variant="contained">1</Button>
                <Button variant="contained">+</Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "40px" }}
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => addToCartHandler(bookDetail)}
                >
                  Add to cart
                </Button>
                <Divider sx={{ marginTop: "40px" }} light />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h5">Categories</Typography>
                  <Typography variant="h6">Comic books</Typography>
                </Box>
                <Box>
                  <Typography variant="h5">Tags</Typography>
                  <Typography variant="h6">Special Edition,</Typography>
                  <Typography variant="h6">Kids StorySpace</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Container>
    </Box>
  );
}
