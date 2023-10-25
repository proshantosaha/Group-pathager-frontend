"use client";

import {
  createContext,
  // useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:1337/api/products";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

const AppProvider = ({ children }) => {
  // const [state, setState] = useState([]);
  // console.log(state);

  const [state, dispatch] = useReducer(reducer, initialState);

  // this code valid
  // const getProducts = async (url) => {
  //   try {
  //     const res = await fetch(url);

  //     const data = await res.json();
  //     dispatch({ type: "SET_LOADING", result: data.data });
  //   } catch (error) {
  //     dispatch({ type: "API_ERROR" });
  //   }
  // };

  // all product

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_LOADING", result: data.data });

        // console.log(data);
        // setState(data);
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
    // getProducts(API);
  }, []);

  // single product

  //  this code is valid useState proces
  // useEffect(() => {
  // fetch(API)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setState(data);
  //   });
  // getProducts(API);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
export default AppProvider;

export const useProductContext = () => {
  return useContext(AppContext);
};
