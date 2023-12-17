import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import styles from "../categoris.module.css";

const Title = () => {
  return (
    <Box sx={{ my: 2 }}>
      <h className={styles.text}>Categories of Books</h>
    </Box>
  );
};

export default Title;
