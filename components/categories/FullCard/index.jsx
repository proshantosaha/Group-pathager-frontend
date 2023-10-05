import React from "react";
import CagorisSingleCard from "../card";
import { Box } from "@mui/material";

import styles from "../categoris.module.css";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import Link from "next/link";

const FullCard = () => {
  return (
    <Box sx={{ bgcolor: "#072470", marginRight: 2, p: 2, paddingTop: 0 }}>
      <div>
        <Box padding="10px" sx={{}}>
          <h2 className={styles.hcolor}>scince</h2>
        </Box>
        <Box>
          <CagorisSingleCard />
        </Box>
        <Stack className={styles.cateButton} direction="row" spacing={2}>
          <Link href={"/CategoryDetails"}>
            <Button variant="contained">View all</Button>
          </Link>
        </Stack>
      </div>
    </Box>
  );
};

export default FullCard;
