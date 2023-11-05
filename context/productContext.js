"use client";

import {
  createContext,
  // useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

import reducer from "../reducer/productReducer";

import { fetcher } from "@/utils/api";

const AppContext = createContext();

const API = "http://localhost:1337/api/products";

// export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_LOADING", result: data.data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  // its data set utils api

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // const fetchProduct = async () => {
  //   const { data } = await fetcher("/api/products");
  //   dispatch({ type: "SET_LOADING", result: data.data });
  // };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
export default AppProvider;

export const useProductContext = () => {
  return useContext(AppContext);
};
