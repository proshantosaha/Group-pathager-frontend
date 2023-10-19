import React from "react";
import Box from "@mui/material/Box";
import styles from "../offer.module.css";
import Image from "next/image";

const ShippingOffer = () => {
  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center "
          marginBottom="10px"
          padding="20px 0px"
        >
          <h2>Subscribe and a part of Pathagar and get exciting offers !</h2>
        </Box>

        <Box sx={{ width: "90%", mx: "auto", p: 2 }} className={styles.flexx}>
          <Box>
            <Box
              sx={{
                color: "text.primary",
                fontSize: 34,
                fontWeight: "medium",
              }}
              mx="auto"
            >
              <Image
                className={styles.align}
                src="/Ellipse2.png"
                width={60}
                height={60}
              />
            </Box>
            <Box>
              <h className={styles.text}>
                Free shipping on orders of Rs 699 through the app
              </h>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}
            >
              <Image src="/Ellipse2.png" width={60} height={60} />
            </Box>
            <Box>
              <h className={styles.text}>
                Free shipping on orders of Rs 699 through the app
              </h>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShippingOffer;
