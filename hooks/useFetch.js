import { useState, useEffect } from "react";
import { fetcher } from "@/utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(async () => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetcher(endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
