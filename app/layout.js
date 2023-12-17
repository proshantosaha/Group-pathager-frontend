import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar/page";
import Footer from "./layout/Footer/page";
import CartProvider from "@/context/cartContext";
import { Toaster } from "react-hot-toast";
import AppProvider from "@/context/productContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pathagar",
  description: "Pathagar Ecomerce shop app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <AppProvider>
        <CartProvider>
          <html lang="en">
            <body className={inter.className}>
              <Navbar />
              {children}
              <Toaster
                position="bottom-right"
                toastOptions={{ duration: 3000 }}
              />

              <Footer />
            </body>
          </html>
        </CartProvider>
      </AppProvider>
    </>
  );
}