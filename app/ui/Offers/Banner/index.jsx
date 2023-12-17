import React from "react";
import Box from "@mui/material/Box";
import styles from "../offer.module.css";
import ShopIcon from "@mui/icons-material/Shop";
import Image from "next/image";

const Banner = () => {
 
  return (
    <>
      <Box
        sx={{
          bgcolor: "#B9E6E5",
          padding: "100px 50px",
          margin: "50px 0px 0px 0px",
          //   borderRadius: "20px",
          mx: "auto",
        }}
      >
        <div className={styles.grid}>
          <div>
            <a href="#" className={styles.texthA}>
              <Box className={styles.grid}>
                <Box>
                  <ShopIcon className={styles.picon} />
                </Box>
                <div>
                  <Box>
                    <p>Available on the</p>
                  </Box>
                  <Box>
                    <p>Play Store</p>
                  </Box>
                </div>
              </Box>
            </a>
          </div>
          <div className={styles.description}>
            <h2 className={styles.texth2}>
              Free Shipping{" "}
              <span className={styles.span}> Favourite Books</span>
            </h2>
            <h2 className={styles.texth2}>
              After installing our web app{" "}
              <span className={styles.span}> Favourite Books</span>
            </h2>
            <h2 className={styles.texth2}>
              Hurry up to claim offers{" "}
              <span className={styles.span}> Favourite Books</span>
            </h2>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Banner;
