import { Inter } from "next/font/google";
import Layout from "@/layout";
import "@/styles/globals.css";
import AppProvider from "@/context/productContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalProvider> */}
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
      {/* </GlobalProvider> */}
    </>
  );
}
