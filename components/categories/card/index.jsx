import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { Box } from "@mui/material";

// import Typography from "@mui/material/Typography";

import styles from "../categoris.module.css";

export default function CagorisSingleCard() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",

          // Width: 300,
          // height: 120,
          borderBottom: 6,
          borderColor: "#DADCE0",
          padding: 2,
        }}
        display="flex"
      >
        <h2>1.</h2>
        <Image
          // className={styles.mright}
          src="/Rectangle37.png"
          width={30}
          height={50}
          className={styles.mleft}
        />
        <Box>
          <h5 className={styles.mleft}>Baiser bonna</h5>
          <h6 className={styles.mleft}>author name</h6>
          <Stack className={styles.mleft} spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
