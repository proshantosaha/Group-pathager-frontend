import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import CagorisSingleCard from "../card";
import { Box, Typography } from "@mui/material";
import styles from "../categoris.module.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const bookCategoris = [
  {
    id: "1",
    bookCategori: "Scince",
    allBook: "/CategoryDetails",
    categoriBook: [
      {
        id: "1",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "2",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "3",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "4",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "5",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
    ],
  },
  {
    id: "2",
    bookCategori: "History",
    allBook: "/CategoryDetails",
    categoriBook: [
      {
        id: "1",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "2",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "3",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "4",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "5",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
    ],
  },
  {
    id: "3",
    bookCategori: "Story",
    allBook: "/CategoryDetails",
    categoriBook: [
      {
        id: "1",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "2",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "3",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "4",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "5",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
    ],
  },
  {
    id: "4",
    bookCategori: "Story",
    allBook: "/CategoryDetails",
    categoriBook: [
      {
        id: "1",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "2",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "3",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "4",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "5",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
    ],
  },
  {
    id: "5",
    bookCategori: "Story",
    allBook: "/CategoryDetails",
    categoriBook: [
      {
        id: "1",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "2",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "3",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "4",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
      {
        id: "5",
        image: "/Rectangle37.png",
        bookName: "Baiser Bonna",
        authorName: "Tasrif khan",
        rating: 5,
      },
    ],
  },
];

const FullCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Box className={styles.fullCard}>
          {bookCategoris?.map((categori) => (
            <SwiperSlide key={categori.id}>
              <Box
                sx={{
                  bgcolor: "#072470",
                  marginRight: 2,
                  p: 2,
                  paddingTop: 0,
                }}
              >
                <Typography
                  width="300px"
                  padding="10px"
                  sx={{}}
                  textAlign="center"
                  className={styles.hcolor}
                >
                  {categori.bookCategori}
                </Typography>

                <CagorisSingleCard bookCard={categori.categoriBook} />

                <Box
                  bgcolor="#fff"
                  display="flex"
                  justifyContent="center"
                  padding="10px"
                >
                  <Stack direction="row" spacing={2}>
                    <Link href={"/CategoryDetails"}>
                      <Button variant="contained">View all</Button>
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </>
  );
};

export default FullCard;
