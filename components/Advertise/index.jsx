import React from "react";
import styles from "./advertise.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Delivary from "./delivary";
import ShopIcon from "@mui/icons-material/Shop";

import AppleIcon from "@mui/icons-material/Apple";
const Advertise = () => {
  return (
    <>
      <Box>
        <Box
          margin="10px 0"
          borderRadius="10px"
          padding="60px 0"
          sx={{ bgcolor: "#B9E6E5" }}
        >
          <div className={styles.grid} sx={{}}>
            <div className={styles.description}>
              <h4 className={styles.texth4}>The Pathagar App</h4>

              <h2 className={styles.texth2}>Make Your Online Shop </h2>
              <h2 className={styles.texth2}> Easier With Our mobaile App </h2>

              <div>
                <a href="#" className={styles.texthA}>
                  <Box className={styles.grid}>
                    <Box>
                      <AppleIcon className={styles.picon} />
                    </Box>
                    <div>
                      <Box>
                        <p>Available on the</p>
                      </Box>
                      <Box>
                        <p>App Store</p>
                      </Box>
                    </div>
                  </Box>
                </a>

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

              {/* <div className={styles.grid}>
              <p>Shop Now</p>
              <KeyboardDoubleArrowRightIcon />
            </div> */}
            </div>

            <Box className={styles.center}>
              <Image
                className={styles.logo}
                src="/add.png"
                alt="Next.js Logo"
                width={640}
                height={600}
                priority
              />
            </Box>
          </div>
        </Box>

        <Box>
          <Box
            padding="60px 0"
            className={styles.grid}
            sx={{ bgcolor: "#D9D9D9" }}
          >
            <Delivary />
            <Delivary />
            <Delivary />
          </Box>

          <Box padding="60px 0" sx={{ bgcolor: "#fff" }}>
            <Box display="flex" justifyContent="center " marginBottom="10px">
              <h2>
                Subscribe and a part of Pathagar and get exciting offers !
              </h2>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
              display="flex"
              justifyContent="center"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline

                // maxRows={4}
              />
              <Box sx={{ marginTop: "10px", marginLeft: "15px" }}>
                <Stack direction="row" spacing={2}>
                  <Button className={styles.addBtn} variant="contained">
                    Subscribe
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Advertise;
