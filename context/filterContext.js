"use client";

import {
  createContext,
  // useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

import reducer from "../reducer/filterReducer";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
  // loading: true,
  // error: "",
  data: [],
  sorting_value: "lowest",
};

const FilterContextProvider = ({ children }) => {
  const { data } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // sorting function

  const sorting = (e) => {
    let userValue = e.target.value;
    return dispatch({ type: "GET_SORT_VALUE", result: userValue });
  };

  useEffect(() => {
    dispatch({ type: "SORITNG_PRODUCTS", result: data });
  }, [data, state.sorting_value]);

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextProvider;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
