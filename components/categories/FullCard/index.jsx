import React from "react";
import CagorisSingleCard from "../card";
// import { Box, ThemeProvider, createTheme } from "@mui/system";
import { Box } from "@mui/material";

import styles from "../categoris.module.css";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const FullCard = () => {
  return (
    <Box sx={{ bgcolor: "#072470", marginRight: 2, p: 2, paddingTop: 0 }}>
      <Box width="350px" padding="10px" sx={{}} textAlign="center">
        <h2 className={styles.hcolor}>scince</h2>
      </Box>
      {/* <Box
        bgcolor="#DADCE0"
        display="flex"
        justifyContent="center"
        padding="10px"
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
        </Stack>
      </Box> */}

      <div>
        <Box sx={{}}>
          <Box>
            <CagorisSingleCard />
            <CagorisSingleCard />
            <CagorisSingleCard />
          </Box>
          <Box
            bgcolor="#fff"
            display="flex"
            justifyContent="center"
            padding="10px"
          >
            <Stack direction="row" spacing={2}>
              <Link href={"/CategoryDetails"}>
                <Button variant="contained">View all</Button>
              </Link>
            </Stack>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default FullCard;
