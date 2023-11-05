import { Inter } from "next/font/google";
import Layout from "@/layout";
import "@/styles/globals.css";
import AppProvider from "@/context/productContext";
import FilterContextProvider from "@/context/filterContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalProvider> */}
      <AppProvider>
        <FilterContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FilterContextProvider>
      </AppProvider>
      {/* </GlobalProvider> */}
    </>
  );
}
