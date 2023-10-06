import Image from "next/image";
import { Box, Typography, Rating } from "@mui/material";

const bookCatagoris = [
  {
    id: "1",
    image: "/Rectangle37.png",
    bookName: "Baiser Bonna",
    authoreName: "Tasrif khan",
    rating: 5
  },
  {
    id: "2",
    image: "/Rectangle37.png",
    bookName: "Baiser Bonna",
    authoreName: "Tasrif khan",
    rating: 4
  },
  {
    id: "3",
    image: "/Rectangle37.png",
    bookName: "Baiser Bonna",
    authoreName: "Tasrif khan",
    rating: 4.5
  },
  {
    id: "4",
    image: "/Rectangle37.png",
    bookName: "Baiser Bonna",
    authoreName: "Tasrif khan",
    rating: 4
  },
  {
    id: "5",
    image: "/Rectangle37.png",
    bookName: "Baiser Bonna",
    authoreName: "Tasrif khan",
    rating: 5
  },
]

export default function CagorisSingleCard() {
  return (
    <>
    {bookCatagoris?.map((book, index) => (
    <Box key={index} sx={{width: "300px", display: "flex", paddingY: 1 }}>
      <Typography variant="h5">{index+1}</Typography>
      <Box sx={{ marginLeft: 2 }}>
        <Image src={book.image} alt={book.bookName} width={50} height={60} />
      </Box>
      <Box sx={{ marginLeft: 2 }}>
        <Typography variant="h6">{book.bookName}</Typography>
        <Typography variant="h6">{book.authoreName}</Typography>
        <Typography>
          <Rating
            style={{ maxWidth: 180 }}
            value={book.rating}
            precision={0.5}
            readOnly
          />
        </Typography>
      </Box>
    </Box>
    ))}
    </>
  );
}
