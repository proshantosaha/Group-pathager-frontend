import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";

// import Typography from "@mui/material/Typography";

import styles from "../card.module.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";

import { Autoplay, Scrollbar, Navigation } from "swiper/modules";

const menuFactData = [
  {
    id: 1,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 2,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 3,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 4,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 5,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 6,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 7,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 8,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 9,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 10,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 11,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 12,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 13,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
  {
    id: 14,
    title: "vs. last week",
    menfactImg: "/Ellipse 1.png",
  },
];

export default function CardManufact() {
  return (
    <>
      {" "}
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
        {menuFactData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              className={styles.grid}
              sx={{
                bgcolor: "background.paper",
                // boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 220,
                border: 1,
                height: 100,
              }}
            >
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                <Image src={item.menfactImg} width={60} height={60} />
              </Box>
              <CardContent>
                <Box className={styles.marginbottom} sx={{ fontSize: 14 }}>
                  {item.title}
                </Box>

                <Box>
                  <FacebookSharpIcon />
                </Box>
              </CardContent>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
