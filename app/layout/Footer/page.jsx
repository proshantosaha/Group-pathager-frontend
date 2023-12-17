import React from "react";
import styles from "./footer.module.css";
// import FooterTop from "./footerTop/page";
import { Box } from "@mui/material";
import FooterTop from "./footerTop/page";

const Footer = () => {
  return (
    <Box
      margin="10px 0"
      borderRadius="10px"
      padding="60px 0"
      sx={{
        maxWidth: "1654px",
        bgcolor: "#B9E6E5",
        mx: "auto",
        padding: "80px 0",
      }}
    >
      {/* className={styles.footerBg} */}
      <h2>
        <FooterTop />
      </h2>
    </Box>
  );
};

export default Footer;
