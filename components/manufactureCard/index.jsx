import React from "react";
import CardManufact from "./card";
import ManufactButton from "./Button/button";
import { Box } from "@mui/material";
import styles from "./card.module.css";

const ManufactureCard = () => {
  return (
    <Box
      margin="10px 0"
      borderRadius="10px"
      sx={{
        maxWidth: "1654px",
        mx: "auto",
        bgcolor: "#D9D9D9",
        padding: "60px 0",
      }}
    >
      <ManufactButton />
      <div className={styles.grid}>
        <CardManufact />
        <CardManufact />
        <CardManufact />
        <CardManufact />
        <CardManufact />
      </div>
    </Box>
  );
};

export default ManufactureCard;
