import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import image1 from "../public/Rectangle 21.png";
import image2 from "../public/Rectangle 101.png";
import image3 from "../public/Ellipse 2 (2).png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

const companyDetails = () => {
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
    {
      id: 5,
      price: "$300-$350",
      stock: "In_Stock",
      author: "By (author)Jenifer Wickham",
      name: "The Adventures of Pin Pin",
      images: "../public/Rectangle 21.png",
    },
    {
      id: 6,
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
        <Container>
          <Typography
            variant="h1"
            textAlign="center"
            color="white"
            sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
          >
            Menu Feature Details
          </Typography>
          
        </Container>
      </Box>
      <Container>
        <Box
        
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#D9D9D9",
            marginTop: "20px",
            borderRadius: "5px",
            paddingX: "30px",
          }}
        >
          <Box
            sx={{
             padding:'20px 0'
            }}
          >
            <Box>
              <Image width="200" height="200" src={image3}></Image>
              <Typography fontWeight="bold" variant="h6">
                Too cool publication
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "750px",
              paddingLeft: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image  width="600" src={image2}></Image>
          </Box> 
        </Box>
        
      </Container>

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
                  image="https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=1380&t=st=1694874052~exp=1694874652~hmac=439bf624dbe0964e41d134e3ce0ed2f81bd36e39f5d3e95c327f38a25120b35f"
                  title="green iguana"
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
                     
                      sx={{
                        color:'#009F7F',
                        border:'25px',
                        backgroundColor:'white',
                        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                        padding:"8px 16px",
                        borderRadius:'25px',
                        fontWeight:'bold'

                    }}
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
        <Stack marginY='30px'  spacing={2}>
      <Pagination sx={{display:'flex',
      justifyContent:'center',
      
     }} count={2} variant="outlined" shape="rounded" />
    </Stack>
      </Container>
    </Box>
  );
};

export default companyDetails;
