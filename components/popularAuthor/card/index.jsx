import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";

import styles from "../card.module.css";

const theme = createTheme({
  palette: {
    // background: {
    //   paper: "#fff",
    // },

    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function AuthorCard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // bgcolor: "background.paper",
          boxShadow: 1,
          // borderRadius: "50%",
          // p: 2,
          minWidth: 200,
          // border: 1,
          // alignItems: "center",
          mx: 2,
        }}
      >
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          <Image src="/Ellipse 1.png" width={200} height={200} />
        </Box>

        <Box
          className={styles.marginbottom}
          sx={{ color: "text.secondary", fontSize: 14, marginLeft: 8 }}
        >
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}
