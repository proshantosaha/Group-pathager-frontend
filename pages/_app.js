import { Inter } from "next/font/google";
import Layout from "@/layout";
import "@/styles/globals.css";
import { GlobalProvider } from "./GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </GlobalProvider>
    </>
  );
}
