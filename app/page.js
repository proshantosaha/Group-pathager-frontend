import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Banner from "./ui/home/Banner/page";
import Cagoris from "./ui/home/categories/page";
import ManufactureCard from "./ui/home/manufactureCard/page";
import Advertise from "./ui/home/Advertise/page";
import PopularAuthorCard from "./ui/home/popularAuthor/page";
import BooksCart from "./components/products/booksCart";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          maxWidth: "1654px",
          mx: "auto",
        }}
      >
        <Banner />
        {/* handle clicl call in props book card  */}
        <BooksCart />
        {/* bookhandleClick={bookhandleClick} */}
        {/* handle clicl call in props book card  */}
        <Cagoris />

        {/* <BookCategori /> */}
        <PopularAuthorCard />
        <ManufactureCard />
        <Advertise />
        {/* <ListView /> */}
      </Box>
    </main>
  );
}
