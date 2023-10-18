import { CartProvider } from "@/context/CartContext";
import AppProvider from "@/context/productContext";

export function GlobalProvider({ children }) {
  return <AppProvider>{children}</AppProvider>;
}
// </CartProvider>;
