import { Box, Button, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const productDetails = () => {

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
            Product Details
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box marginTop="100px">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6} >
              <CardMedia>
              <img  src="" alt="details photo" />
              </CardMedia>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
              The Space Hero Part one
              </Typography>
              <Typography variant="h6">
              By (author)Sharone C Stone
              </Typography>
              <Typography variant="h6">
              $80.00
              </Typography>
              <Typography variant="p">
              A comic book, also called ridiculous book, ridiculous magazine
                or simply ridiculous, is a publication that consists of comics
                art in the form of succe...
              </Typography>

              <Box sx={{paddingY:"30px"}}>
              <Button variant="contained">-</Button>
              <Button variant="contained">1</Button>
              <Button variant="contained">+</Button>
              <Button variant="contained" sx={{marginLeft:'40px'}} startIcon={<ShoppingCartIcon />}>
                Add to cart
              </Button>
              <Divider sx={{marginTop:'40px'}} light />
              </Box>
           <Box sx={{display:'flex',
          justifyContent:"space-between"}}>
          <Box>
          <Typography variant="h5">
              Categories
              </Typography>
              <Typography variant="h6">
              Comic books
              </Typography>
          </Box>
          <Box>
          <Typography variant="h5">
          Tags
              </Typography>
              <Typography variant="h6">
              Special Edition,
              </Typography>
              <Typography variant="h6">
              Kids StorySpace
              </Typography>
          </Box>
           </Box>
            
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default productDetails;
