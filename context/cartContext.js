"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { fetcher } from "../utils/api";
//1)  create  the context
export const CartContext = createContext();

// 2) create the provider
export const CartProvider = ({ children }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  // console.log(cart);
  const [isLogin, setIsLogin] = useState();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCouny] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await fetcher(`/api/products?populate=*`);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      // console.log("error:", error);
    }
  };

  const handleAddToCart = (product, quantity) => {
    let items = [...cart];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }

    setCart(items);

    toast.success("Successfully item added to addtocart ");
    // localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleDeletFromCart = (product) => {
    let items = [...cart];
    items = items.filter((p) => p.id !== product.id);

    setCart(items);
    toast.success("Successfully item delet to addtocart ");
  };

  // log out thakle ekta alert dekhabe
  const addToCart = (product) => {
    if (!user) {
      router.push("/sign-in");
      window.alert(" please log in");
      // <Link href={"/sign-in"}/>
    } else {
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Successfully item added to addtocart ");
    }

    // localStorage.setItem("cart", JSON.stringify(cart));
  };

  const deletFromCart = (slug) => {
    setCart((prevCart) => prevCart?.filter((item) => item?.slug !== slug));
    toast.success("Successfully item delet to addtocart ");
  };

  // const setCartToState = () => {
  //   setCart(
  //     localStorage.getItem("cart")
  //       ? JSON.parse(localStorage.getItem("cart"))
  //       : []
  //   );
  // };

  // const addItemToCart = async ({
  //   id,
  //   image,
  //   title,
  //   authorname,
  //   rating,
  //   stock,
  //   price,
  //   quantity = 1,
  // }) => {
  //   const item = {
  //     id,
  //     image,
  //     title,
  //     authorname,
  //     rating,
  //     stock,
  //     price,
  //     quantity,
  //   };
  //   console.log(item);
  //   const isItemExist = cart?.cartItems?.find((itm) => itm.id === item.id);

  //   let newCartItems;

  //   if (isItemExist) {
  //     newCartItems = cart?.cartItems?.map((itm) =>
  //       itm.id === isItemExist.id ? item : itm
  //     );
  //   } else {
  //     newCartItems = [...(cart?.cartItems || []), item];
  //   }

  //   localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
  //   setCartToState();
  // };

  // const deleteItemFromCart = (id) => {
  //   const newCartItems = cart?.cartItems?.filter((itm) => itm.id !== id);

  //   localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
  //   setCartToState();
  // };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        loading,
        addToCart,
        deletFromCart,
        cartCount,
        setCartCouny,
        cartSubTotal,
        setCartSubTotal,
        handleDeletFromCart,
        handleAddToCart,
        isLogin,
        setIsLogin,
        // addItemToCart,
        // deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// 3) creat use context hooks
export const useCart = () => {
  // return the context data
  return useContext(CartContext);
};
