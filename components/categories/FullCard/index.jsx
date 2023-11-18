"use client";

import React, { useEffect, useState } from "react";
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
import { fetcher } from "@/utils/api";
// import Category from "@/pages/[category]";

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
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetcher("/api/categories?populate=*");

    setCategories(data);
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Box className={styles.fullCard}>
          {categories?.map((item) => (
            <SwiperSlide key={item.id}>
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
                  {item.attributes.name}
                </Typography>

                <CagorisSingleCard data={item.attributes.products.data} />

                <Box
                  bgcolor="#fff"
                  display="flex"
                  justifyContent="center"
                  padding="10px"
                >
                  <Stack direction="row" spacing={2}>
                    <Link
                      href={{
                        pathname: `/category/${item?.attributes?.slug}`,
                        query: {},
                      }}
                    >
                      <Button variant="contained" onClick={() => {}}>
                        {/* <Category data={item.attributes.products.data} /> */}
                        View all
                      </Button>
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

export async function getStaticPaths() {
  const category = await fetcher("/api/categories?populate=*");
  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
