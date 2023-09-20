import { Inter } from "next/font/google";
// import Header from "@/layout/Header";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
// import Layout from "@/layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <Footer />

      {/* <Layout/> */}
    </>
  );
}
