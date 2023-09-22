import Layout from "@/layout";
import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Banner = () => {
  return (
    // bgcolor: "#6DCEF5"
    <Box
      sx={{
        bgcolor: "#B9E6E5",
        padding: "100px 50px",
        margin: "50px 0px 10px 0px",
        borderRadius: "20px",
        mx: "auto",
      }}
    >
      <div className={styles.grid}>
        <div className={styles.description}>
          <h4 className={styles.texth4}>Sale up to 20% off</h4>

          <h2 className={styles.texth2}>
            Meet Your Next <span className={styles.span}> Favourite Books</span>
          </h2>

          <div>
            <a href="#" className={styles.texthA}>
              Shop Now <KeyboardDoubleArrowRightIcon className={styles.picon} />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/banner3.png"
            alt="Next.js Logo"
            width={849}
            height={400}
            priority
          />
        </div>
      </div>
    </Box>
  );
};

export default Banner;
