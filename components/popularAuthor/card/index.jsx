import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";

import styles from "../card.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css";

// import "./styles.css";

// import required modules
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";

const authorData = [
  {
    id: 1,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 2,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 3,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 4,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 5,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 6,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 7,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 8,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 9,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 10,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 11,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 12,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 13,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
  },
  {
    id: 14,
    title: "vs. last week",
    // title2: "Favourite Books",
    // descount: "Sale up to 20% off",
    // shopButon: " Shop Now",
    // rating: "⭐⭐⭐⭐⭐",
    // review: "100 review",
    authorImg: "/Ellipse 1.png",
    // priceTag: 97,
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
  return (
    <ThemeProvider theme={theme}>
      <Swiper
        modules={[Scrollbar, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={5}
        // pagination={{ clickable: true }}
        navigation={true}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        touchRatio={1.5}
        effect={"flip"}
        // className={classes.mySwiper}
      >
        {authorData.map((item) => (
          <SwiperSlide className={styles.swiperSlide}>
            <Box
              sx={{
                // bgcolor: "background.paper",
                boxShadow: 1,
                // borderRadius: "50%",
                // p: 2,
                minWidth: 200,
                // border: 1,
                // alignItems: "center",
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
                <Image src={item.authorImg} width={200} height={200} />
                {/* <Image src={image} /> */}
              </Box>

              <Box
                className={styles.marginbottom}
                sx={{ color: "text.secondary", fontSize: 14, marginLeft: 8 }}
              >
                {item.title}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </ThemeProvider>
  );
}
