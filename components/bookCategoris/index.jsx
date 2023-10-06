import React from "react";
import Link from "next/link";
import { Box, Typography, Button, Grid } from "@mui/material";
import BookCart from "./BookCart";

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
    bookCategori: "Fridom Fiter",
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
  }
];

export default function BookCategori() {
  return (
    <Box sx={{ bgcolor: "#94B9FE", padding: 3, borderRadius: 3, mt: 2 }}>
      <Typography variant="h5" sx={{ paddingY: 2, fontWeight: "bold" }}>
        Categories of Books
      </Typography>

      <Box sx={{ bgcolor: "#072470", padding: 3 }}>
      <Grid container spacing={3}>
        {bookCategoris.map((categori) => (
            <Grid item xs={12} sm={6} md={3} key={categori.id}>
          <Box sx={{}}>
            <Typography variant="h5" sx={{display: "flex", justifyContent: "center", pb: 2}}>{categori.bookCategori}</Typography>

            <BookCart bookCarts={categori.categoriBook} />

            <Box sx={{display: "flex", justifyContent: "center", pt: 2}}>
            <Link href={categori.allBook}>
              <Button variant="contained">View all</Button>
            </Link>
            </Box>
          </Box>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>
  );
}
