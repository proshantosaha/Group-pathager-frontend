import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import ManufactureCard from "@/components/manufactureCard";
import PopularAuthorCard from "@/components/popularAuthor";
import Advertise from "@/components/Advertise";
import Cagoris from "@/components/categories";
import Box from "@mui/material/Box";

import Slider from "@/components/slider";

import BooksCart from "@/components/PopularBooks/BooksCart";
// import PaginationPage from "@/components/pagination";
import TopPagination from "@/components/pagination/TopPagination";

// import BooksCart from "@/components/PopularBooks/BooksCart";

// import Navbar from '@/layout/Navbar'

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const bookhandleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <Head>
        <title>Pathagar </title>
        <meta
          name="Pathagar ecomerce shop app"
          content="Pathager ecomerce shop app , this site useing buy the book "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.main}>
        {/* `${styles.main} ${inter.className}` */}

        <Box
          sx={{
            maxWidth: "1654px",
            mx: "auto",
          }}
        >
          <Banner />
          {/* handle clicl call in props book card  */}
          <BooksCart bookhandleClick={bookhandleClick} />
          {/* handle clicl call in props book card  */}
          <Cagoris />
          <PopularAuthorCard />
          <ManufactureCard />
          <Advertise />
          <TopPagination />
          <Slider />
        </Box>
      </main>
    </>
  );
}
