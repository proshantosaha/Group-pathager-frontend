import React from "react";
import styles from "./advertise.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/system";
import CardContent from "@mui/material/CardContent";

// const theme = createTheme({
//   palette: {
//     background: {
//       //   paper: "#fff",
//     },

//     text: {
//       primary: "#173A5E",
//       secondary: "#46505A",
//     },
//     action: {
//       active: "#001E3C",
//     },
//     success: {
//       dark: "#009688",
//     },
//   },
// });

const Delivary = () => {
  return (
    <Box>
      {/* <ThemeProvider theme={theme}> */}
      <Box
        className={styles.grid}
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          // p: 2,
          minWidth: 410,
          padding: "80px 0",
        }}
      >
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          <Image src="/bus.png" width={60} height={60} />
        </Box>

        <Box
          // className={styles.marginbottom}
          sx={
            {
              // color: "text.secondary",
              // display: "inline",
              // fontSize: 14,
            }
          }
        >
          <h5 className={styles.texth5}>Happy Return</h5>
          <h6 className={styles.texth6}>7 days return facility</h6>
        </Box>
      </Box>
      {/* </ThemeProvider> */}
    </Box>
  );
};

export default Delivary;
