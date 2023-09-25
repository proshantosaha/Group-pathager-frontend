import React from "react";
import ShippingOffer from "./Shipping offers";
import Banner from "@/pages/Offers/Banner";
import Box from "@mui/material/Box";
import Card from "./offerscard/card";

import styles from "./offer.module.css";

const Offers = () => {
  return (
    <Box
      sx={{
        maxWidth: "1654px",
        mx: "auto",
      }}
    >
      <Box
        // sx={{
        //   borderRadius: "20px",
        // }}
      >
        <Banner />
        <ShippingOffer />
      </Box>

      <Box
        sx={{
          background: "#F2F2F2",
          // boxShadow: 1,
          borderRadius: 2,
          padding: "40px 0px",
        }}
        className={styles.grid}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default Offers;
