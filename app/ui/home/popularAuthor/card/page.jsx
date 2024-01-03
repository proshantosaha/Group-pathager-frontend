"use client";

import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";

import styles from "../card.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";

import { Autoplay, Scrollbar, Navigation } from "swiper/modules";
import { useCart } from "@/context/cartContext";

const authorData = [
  {
    id: 1,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 2,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 3,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 4,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 5,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 6,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 7,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 8,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 9,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 10,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 11,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 12,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 13,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
  {
    id: 14,
    title: "vs. last week",
    authorImg: "/Ellipse 1.png",
  },
];

const theme = createTheme({
  palette: {
    // background: {
    //   paper: "#fff",
    // },

    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function AuthorCard() {
  const { products } = useCart();
  return (
    <ThemeProvider theme={theme}>
      <Swiper
        modules={[Scrollbar, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={6}
        // pagination={{ clickable: true }}
        navigation={true}
        // speed={1000}
        loop={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        touchRatio={1.5}
        effect={"flip"}
        // className={classes.mySwiper}
      >
        {console.log(products)}
        {products.map((item) => (
          <SwiperSlide>
            <Box
              sx={{
                boxShadow: 1,
                minWidth: 200,
                mx: 2,
              }}
            >
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                <Image
                  src={item?.attributes?.authimage?.data?.attributes?.url}
                  width={200}
                  height={200}
                />
              </Box>

              <Box
                className={styles.marginbottom}
                sx={{ color: "text.secondary", fontSize: 14, marginLeft: 5 }}
              >
                {item.attributes.author}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </ThemeProvider>
  );
}
