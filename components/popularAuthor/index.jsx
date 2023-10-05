import React from "react";
import AuthorCard from "./card";
import ManufactButton from "./Button/button";
import { Box } from "@mui/material";
import styles from "./card.module.css";

const PopularAuthorCard = () => {
  return (
    <Box
      margin="10px 0"
      borderRadius="10px"
      sx={{
        bgcolor: "#fff",
        padding: "60px 0",
      }}
    >
      <ManufactButton />
      <div className={styles.grid}>
        <AuthorCard />
      </div>
    </Box>
  );
};

export default PopularAuthorCard;
