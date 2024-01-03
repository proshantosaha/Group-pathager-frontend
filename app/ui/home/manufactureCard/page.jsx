import React from "react";
import CardManufact from "./card/page";
import ManufactButton from "./Button/button";
import { Box } from "@mui/material";
import styles from "./card.module.css";

const ManufactureCard = () => {
  return (
    <Box
      margin="10px 0"
      borderRadius="10px"
      sx={{
        bgcolor: "#b9f4f3",
        padding: "60px 0",
      }}
    >
      <ManufactButton />
      <div className={styles.grid}>
        <CardManufact />
      </div>
    </Box>
  );
};

export default ManufactureCard;
