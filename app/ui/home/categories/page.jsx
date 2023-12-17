import React from "react";
import FullCard from "./FullCard/page";
import styles from "./categoris.module.css";
import Box from "@mui/material/Box";
import Title from "./title/page";

const Cagoris = () => {
  return (
    <Box
      maxWidth="1654px"
      mx="auto"
      bgcolor="#fff"
      padding="50px 50px"
      borderRadius="20px"
    >
      <Title />
      {/* <Box display="flex" justifyContent="center"> */}
      {/* <Link></Link> */}
      <FullCard />
      {/* </Box> */}
    </Box>
  );
};

export default Cagoris;