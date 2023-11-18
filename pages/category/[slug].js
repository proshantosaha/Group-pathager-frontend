"use client";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import image1 from "../public/Rectangle 21.png";
// import image2 from "../public/Rectangle 101.png";
// import image3 from "../public/Ellipse 2 (2).png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
import { useProductContext } from "@/context/productContext";
import Cards from "../../components/PopularBooks/cards";
import Link from "next/link";
import { fetcher } from "@/utils/api";
// import Cards from "@/components/PopularBooks/cards";
// import Cards from "@/pages/product/cards";

const Category = () => {
  const { categories, setCategories } = useProductContext();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await fetcher(`/api/categories?populate[slug]=*`);

    setCategories(data);
  };

  // const book = [
  //   {
  //     id: 1,
  //     price: "$300-$350",
  //     stock: "In_Stock",
  //     author: "By (author)Jenifer Wickham",
  //     name: "The Adventures of Pin Pin",
  //     images: "../public/Rectangle21.png",
  //   },
  //   {
  //     id: 2,
  //     price: "$300-$350",
  //     stock: "In_Stock",
  //     author: "By (author)Jenifer Wickham",
  //     name: "The Adventures of Pin Pin",
  //     images: "../public/Rectangle21.png",
  //   },
  //   {
  //     id: 3,
  //     price: "$300-$350",
  //     stock: "In_Stock",
  //     author: "By (author)Jenifer Wickham",
  //     name: "The Adventures of Pin Pin",
  //     images: "../public/Rectangle21.png",
  //   },
  //   {
  //     id: 4,
  //     price: "$300-$350",
  //     stock: "In_Stock",
  //     author: "By (author)Jenifer Wickham",
  //     name: "The Adventures of Pin Pin",
  //     images: "../public/Rectangle21.png",
  //   },
  // ];
  return (
    <Box
      sx={{
        maxWidth: "1654px",
        mx: "auto",
      }}
    >
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
        <Box
          sx={{
            backgroundColor: "#EAEAEA",
            height: "40px",
            borderRadius: "5px",
            marginBottom: "30px",
          }}
        ></Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categories?.products?.data?.map((item) => (
            <Grid item xs={12} sm={4} md={3} key={item.id}>
              {
                <Card>
                  <Image
                    component="img"
                    // Set height to "auto"
                    objectFit="cover" // Maintain aspect ratio and fit
                    src={item.attributes.image}
                    alt={item.attributes.name}
                    width="300"
                    height="240"
                  />

                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.attributes.name}
                    </Typography>
                    <Typography variant="p" padding="5px 0" component="div">
                      {item.attributes.author}
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
                      {item.stock}
                    </Typography>
                    <Typography
                      variant="p"
                      color="#009F7F"
                      padding="10px 0"
                      fontWeight="bold"
                      component="div"
                    >
                      {item.price}
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
              }
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Category;

// card ta kaje lagano jabe
// {
//   <Card>
//     <Image
//       component="img"
//       // Set height to "auto"
//       objectFit="cover" // Maintain aspect ratio and fit
//       src={item.attributes.image}
//       alt={item.attributes.name}
//       width="300"
//       height="240"
//     />

//     <CardContent>
//       <Typography variant="h6" component="div">
//         {item.attributes.name}
//       </Typography>
//       <Typography variant="p" padding="5px 0" component="div">
//         {item.attributes.author}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <StarIcon />
//         <StarIcon />
//         <StarIcon />
//         <StarIcon />
//         <StarBorderIcon />
//         <Typography variant="p" padding="5px 0" component="div">
//           (1)
//         </Typography>
//       </Box>
//       <Typography variant="p" component="div">
//         {item.stock}
//       </Typography>
//       <Typography
//         variant="p"
//         color="#009F7F"
//         padding="10px 0"
//         fontWeight="bold"
//         component="div"
//       >
//         {item.price}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           cursor: "pointer",
//         }}
//       >
//         <Button variant="contained" startIcon={<ShoppingCartIcon />}>
//           Add to cart
//         </Button>
//         <FavoriteBorderIcon />
//       </Box>
//     </CardContent>
//   </Card>;
// }
