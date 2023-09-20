import React from "react";
import FullCard from "./FullCard";
import styles from "./categoris.module.css";
import Box from "@mui/material/Box";
import Title from "./title";

const Cagoris = () => {
  return (
    <Box
      maxWidth="1654px"
      mx="auto"
      bgcolor="#94B9FE"
      padding="50px 50px"
      borderRadius="20px"
    >
      <Title />
      <Box display="flex" justifyContent="center">
        <FullCard />
        <FullCard />
        <FullCard />
      </Box>
    </Box>
  );
};

export default Cagoris;
