import {
  Box,
  Button,
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  Rating,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetails = () => {
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


  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      {/* Upper section  */}
      <Grid container spacing={5} sx={{ marginBottom: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            sx={{
              border: "1px solid grey",
              padding: "50px",
              background: "#D9D9D9",
              borderRadius: "20px",
              width: "80%",
              height: "500px",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/tom-sawyer-paints-fence-open-book-illustration_135176-9.jpg?size=626&ext=jpg&ga=GA1.1.1747484890.1694422252&semt=ais"
              alt="Image"
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "4px 4px 4px rgba(0 , 0 , 0 , 0.2)",
                borderRadius: "20px",
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
            <Box>
              <Typography variant="h4" fontWeight={700}>
                Name of the Book
              </Typography>
              <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                <Typography variant="p">By author name</Typography>
              </Box>
              <Box>
                <Typography variant="h4" fontWeight={700} marginBottom={2}>
                  $800
                </Typography>
              </Box>
              <Typography variant="p">Description of the book</Typography>
            </Box>

            {/* Cart Section */}
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={decreaseCount}
                  sx={{ marginRight: "10px" }}
                  disabled={count === 0}
                >
                  <RemoveIcon />
                </Button>
                <Typography variant="body1">{count}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={increaseCount}
                  sx={{ marginLeft: "10px" }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    background: "white",
                    color: "green",
                    borderRadius: "30px",
                    "&:hover": {
                      background: "green",
                      color: "white",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
            <hr
              style={{
                height: 2,
                marginTop: 30,
                background: "grey",
                borderRadius: "15px",
                marginBottom: 30,
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={600} fontSize={19}>
                  Category
                </Typography>
                <Typography variant="p" color={"grey"}>
                  comics
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600} fontSize={19}>
                  Tags
                </Typography>
                <Typography variant="p" color={"grey"}>
                  Special Edition
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* lower section  */}
      <Box>
        <Box>
          <Typography variant="h4">Details</Typography>
          <Typography variant="p" color={"grey"}>
            Details2 will be here
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <Typography variant="h6" fontWeight={600} fontSize={16}>
            Title:{" "}
          </Typography>
          <span> Title will be here</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <Typography variant="h6" fontWeight={600} fontSize={16}>
            Author:{" "}
          </Typography>
          <span style={{ color: "grey" }}> Author will be here</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <Typography variant="h6" fontWeight={600} fontSize={16}>
            Publisher:{" "}
          </Typography>
          <span style={{ color: "grey" }}> Publisher will be here</span>
        </Box>
      </Box>

      {/* Related Product section  */}

      <Box sx={{ marginTop: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Related Product
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

export default ProductDetails;
