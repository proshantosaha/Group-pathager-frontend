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
import Styles from "@/pages/productdetailpage/product.module.css";

import React, { useEffect, useState, useContext } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "@/context/CartContext";
import { useProductContext } from "@/context/productContext";
import { useRouter } from "next/router";
import { HandymanOutlined } from "@mui/icons-material";
import Link from "next/link";
import ProductCerousel from "./productCerousel";

import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from "next/image";
import RelatedProduct from "./RelatedProduct";

const productImage = [
  {
    id: 1,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 2,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 3,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 4,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 5,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 6,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 7,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 8,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
  {
    id: 9,

    bannerImg: "/banner3.png",
    name: "Product Name",
    price: 2.4,
  },
];

const ProductDetails = () => {
  const [books, setBooks] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const { data } = useProductContext();

  const router = useRouter();

  // console.log(cart);

  const detail = data?.find((e) => e.id === Number(router?.query.id));

  // useEffect(() => {
  //   // Fetch the JSON data from your file
  //   fetch("/Book.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsFavorite(new Array(data.length).fill(false));
  //       setBooks(data);
  //     });
  // }, []);

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
    <Box maxWidth="1654px" mx="auto" sx={{}}>
      {/* Upper section  */}
      {/* {books?.cartItems?.map((cartItem) => ( */}
      <Box className={Styles.productdetail} spacing={5} sx={{ marginTop: 5 }}>
        {/* left start  */}
        <Box className={Styles.productCarousel} item xs={12} sm={6} md={6}>
          <ProductCerousel />
          {/* <CardMedia>
            <Box
              width={400}
              height={400}
              mx="auto"
              sx={{
                border: "1px solid grey",
                padding: "50px",
                background: "#D9D9D9",
                borderRadius: "20px",
              }}
            >
              <img
                src=""
                alt="Image"
                style={{
                  width: "60%",
                  height: "60%",
                  boxShadow: "4px 4px 4px rgba(0 , 0 , 0 , 0.2)",
                  borderRadius: "20px",
                }}
              />
            </Box>
          </CardMedia> */}
        </Box>

        {/* left end */}

        {/* right start  */}
        <Box className={Styles.productCarousel}>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="p">
              {detail?.attributes.name}
              proshanto saha
            </Typography>
          </Box>

          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="p">
              {detail?.attributes.name}
              saha
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="p">
              {detail?.attributes.authorname}
              boss proshanto
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="p">
              {detail?.attributes.rating}
              ****
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="p">
              {detail?.attributes.price}
              4.00
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" fontWeight={700} marginBottom={2}>
              {detail?.attributes.stock}
            </Typography>
          </Box>

          {/* product variant  */}
          <Box>
            {" "}
            <div>product variant</div>
          </Box>

          <Box>
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
          </Box>

          <Box>
            <Box>
              <Link href={`../../components/PopularBooks/cart.jsx`}>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => addToCart(id, amount, product)}
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
              </Link>
            </Box>
            <Box>
              <Link href={`../../components/PopularBooks/cart.jsx`}>
                <Button
                  variant="contained"
                  startIcon={<FavoriteBorderIcon />}
                  onClick={() => addToCart(id, amount, product)}
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
                  WistList
                </Button>
              </Link>
            </Box>
          </Box>

          <Box>
            <Box> product details</Box>
            <Box variant="p" width={500}>
              {detail?.attributes.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga
            </Box>
            <Box variant="p" width={500}>
              {detail?.attributes.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga
            </Box>
          </Box>
        </Box>

        {/* right end  */}
      </Box>

      {/* // ))} */}
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

      <Box>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          speed={500}
          loop={true}
          // navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          touchRatio={1.5}
          effect={"flip"}
          // className={classes.mySwiper}
        >
          {productImage?.map((banner) => (
            // console.log(banner.title);
            <SwiperSlide>
              <div key={banner.id}>
                <div>
                  <Image
                    src={banner.bannerImg}
                    alt="Next.js Logo"
                    width={200}
                    height={200}
                    priority
                  />
                </div>
                <div>
                  {banner.name}
                  {banner.price}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* <RelatedProduct /> */}
    </Box>
  );
};

export default ProductDetails;
