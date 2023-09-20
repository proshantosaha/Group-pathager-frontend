import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import styles from "../card.module.css";

const ManufactButton = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto", my: 2 }} className={styles.flexx}>
      <h className={styles.text}>Top manufacturs</h>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">View all</Button>
      </Stack>
    </Box>
  );
};

export default ManufactButton;
