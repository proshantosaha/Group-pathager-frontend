"use client";

import {
  createContext,
  // useState,
  useEffect,
  useContext,
  useReducer,
  useState,
} from "react";

import reducer from "../reducer/productReducer";

import { fetcher } from "@/utils/api";

const AppContext = createContext();

const API = "http://localhost:1337/api/products?populate=*";
// const API = fetcher("/api/products");

// export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const initialState = {
  loading: true,
  error: "",
  products: [],
};

const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  // console.log(state);

  // const [products, setProducts] = useState(null);

  // console.log(products);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { products } = await fetcher("/api/products");
  //   setProducts(products);
  // };

  // useEffect(() => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({ type: "SET_LOADING", result: data.data });
  //     })
  //     .catch(() => {
  //       dispatch({ type: "ERROR" });
  //     });
  // }, []);

  // its data set utils api

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // const fetchProduct = async () => {
  //   const { data } = await fetcher("/api/products");
  //   dispatch({ type: "SET_LOADING", result: data.data });
  // };

  return (
    <AppContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useProductContext = () => {
  return useContext(AppContext);
};
