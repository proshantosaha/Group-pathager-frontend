import { CartProvider } from "@/contex/CartContext";

export function GlobalProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}