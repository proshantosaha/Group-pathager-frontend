import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Rating, Typography } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from 'react';

const AuthorDetails = () => {
    const [books, setBooks] = useState([]);
    const [isFavorite, setIsFavorite] = useState([]);
  
    useEffect(() => {
      // Fetch the JSON data from your file
      fetch("/Book.json")
        .then((response) => response.json())
        .then((data) => {
          setIsFavorite(new Array(data.length).fill(false));
          setBooks(data);
        });
    }, []);
    const handleFavoriteToggle = (index) => {
      // Create a copy of the isFavorite array and toggle the value for the clicked card
      const updatedFavorites = [...isFavorite];
      updatedFavorites[index] = !updatedFavorites[index];
      setIsFavorite(updatedFavorites);
    };
  
    return (
        <Box sx={{ width: "80%", margin: "0 auto" }}>
        {/* Upper section  */}
        <Grid container spacing={5} sx={{ marginBottom: 10 }}>
          <Grid item xs={12} sm={6} md={6}>
            <CardMedia
              sx={{
            
                
                width: "80%",
                height: "auto",
              }}
            >
              <img
                src="https://img.freepik.com/premium-vector/tom-sawyer-paints-fence-open-book-illustration_135176-9.jpg?size=626&ext=jpg&ga=GA1.1.1747484890.1694422252&semt=ais"
                alt="Image"
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "4px 4px 4px 4px rgba(0 , 0 , 0 , 0.2)",
                  
                }}
              />
            </CardMedia>
          </Grid>
  
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
            
            
            </Box>
          </Grid>
        </Grid>
  
        {/* lower section  */}
    
  
        {/* Related Product section  */}
  
        <Box
         sx={{ marginTop: 4 }}>
          <Box>
            <Typography variant="h4" >
              Total books:16
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {books.map((book, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ background: "#F3FCFF", minHeight: "100%" }}>
                <CardMedia
                  component="img"
                  height="400px" // Set height to "auto"
                  objectFit="cover" // Maintain aspect ratio and fit
                  image={book.Image}
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography color="text.secondary">
                    by {book.authorname}
                  </Typography>
                  <Typography>
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={book.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Typography>
                  <Typography variant="p">{book.stock}</Typography>
                  <Typography variant="h6" color="green" fontWeight="700">
                    ${book.price}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                      "& button": {
                        background: "white",
                        fontWeight: 700,
                        border: "1px solid grey",
                        borderRadius: 25,
                        color: "green",
                        transition: "background 0.3s, color 0.3s",
                        "&:hover": {
                          background: "green",
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<ShoppingCartIcon />}
                      sx={{ background: "white", color: "green" }}
                    >
                      Add to Cart
                    </Button>
                    <Typography>
                      <IconButton
                        color={isFavorite[index] ? "secondary" : "default"}
                        onClick={() => handleFavoriteToggle(index)}
                      >
                        {isFavorite[index] ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default AuthorDetails;