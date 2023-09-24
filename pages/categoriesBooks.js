import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

const categoriesBooks = () => {
  const book = [
    {
      id: 1,
      price: "$300-$350",
      stock: "In_Stock",
      author: "By (author)Jenifer Wickham",
      name: "The Adventures of Pin Pin",
      images: "../public/Rectangle 21.png",
    },
    {
      id: 2,
      price: "$300-$350",
      stock: "In_Stock",
      author: "By (author)Jenifer Wickham",
      name: "The Adventures of Pin Pin",
      images: "../public/Rectangle 21.png",
    },
    {
      id: 3,
      price: "$300-$350",
      stock: "In_Stock",
      author: "By (author)Jenifer Wickham",
      name: "The Adventures of Pin Pin",
      images: "../public/Rectangle 21.png",
    },
    {
      id: 4,
      price: "$300-$350",
      stock: "In_Stock",
      author: "By (author)Jenifer Wickham",
      name: "The Adventures of Pin Pin",
      images: "../public/Rectangle 21.png",
    },
  ];
  return (
    <Box>
      <Box sx={{ backgroundColor: "#0081FE", padding: "20px 0" }}>
          <Typography
            variant="h1"
            textAlign="center"
            color="white"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Categories of Books Details
          </Typography>
      </Box>
      <Container
        sx={{
          marginTop: "50px",
        }}
      >
        <Typography variant="h6" sx={{ paddingBottom: 5, fontWeight: "bold" }}>
          Total Products: 8
        </Typography>
        <Box sx={{
          backgroundColor:"#EAEAEA",
          height:'40px',
          borderRadius:'5px',
          marginBottom:'30px'
        }}>

        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {book.map((product, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card>
                <CardMedia
                  sx={{
                    height: 240,
                  }}
                  image="https://img.freepik.com/free-photo/flowery-book-separator_52683-100675.jpg?size=626&ext=jpg&ga=GA1.2.619575553.1680185614&semt=sph"
                />
                {/* <Image height={340} src={image}></Image> */}
                {/* <img src={`${product.image}`} alt={product.name} /> */}
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="p" padding="5px 0" component="div">
                    {product.author}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <Typography variant="p" padding="5px 0" component="div">
                      (1)
                    </Typography>
                  </Box>
                  <Typography variant="p" component="div">
                    {product.stock}
                  </Typography>
                  <Typography
                    variant="p"
                    color="#009F7F"
                    padding="10px 0"
                    fontWeight="bold"
                    component="div"
                  >
                    {product.price}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                    <FavoriteBorderIcon />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default categoriesBooks;
