import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { Box } from "@mui/material";

// import Typography from "@mui/material/Typography";

import styles from "../categoris.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
import { Scrollbar } from "swiper/modules";

const categoryData = [
  {
    id: 1,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 2,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 3,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 4,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 5,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 6,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 7,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 8,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 9,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
  {
    id: 10,
    title: "Baiser bonna",
    authorName: " author name",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    cateImg: "/Rectangle37.png",
    // priceTag: 97,
  },
];

export default function CagorisSingleCard() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        // freeMode={true}
        // scrollbar={true}
        mousewheel={true}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          {categoryData.map((item) => (
            <Box
              sx={{
                bgcolor: "background.paper",

                // Width: 300,
                borderBottom: 6,
                borderColor: "#DADCE0",
                padding: 2,
              }}
              display="flex"
            >
              <h2>1.</h2>
              <Image
                // className={styles.mright}
                src={item.cateImg}
                width={30}
                height={50}
                className={styles.mleft}
              />
              <Box>
                <h5 className={styles.mleft}>{item.title}</h5>
                <h6 className={styles.mleft}>{item.authorName}</h6>
                <Stack className={styles.mleft} spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </Stack>
              </Box>
            </Box>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
