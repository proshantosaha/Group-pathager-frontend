import * as React from "react";
import { Box } from "@mui/system";

// import Typography from "@mui/material/Typography";

import styles from "../offer.module.css";
// import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

export default function Card() {
  return (
    <Box
      // className={styles.grid}
      sx={{
        background: "#E3AB9A",
        // boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 120,
        border: 1,
        height: 100,
        margin: "4px",
      }}
    >
      <Box
        sx={{
          color: "#000",
          fontSize: 34,
          fontWeight: "medium",
          border: 1,

          mt: "10px",
        }}
      >
        <h2>30%</h2>
      </Box>

      <Box
        sx={{
          fontSize: 14,
          border: 1,

          bgcolor: "#F2F2F2",
          mt: "10px",
        }}
      >
        vs. last week
      </Box>
    </Box>
  );
}
