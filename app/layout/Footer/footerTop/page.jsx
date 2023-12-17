import React from "react";
import styles from "../footer.module.css";
import Box from "@mui/material/Box";
import Image from "next/image";

const FooterTop = () => {
  return (
    <>
      <Box className={styles.grid}>
        <Box
          sx={{
            width: "20%",
          }}
        >
          <Image src="/LogoLIFT.png" width={60} height={60} />
        </Box>

        <Box
          sx={{
            width: "20%",
            color: "text.primary",
            fontSize: 20,
            fontWeight: "medium",
          }}
          className={styles.card}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.</p>
          <p>Learn about Next.</p>

          <p>Learn about Next.</p>
          <p>Learn about Next.</p>

          <p>Learn about Next.</p>
        </Box>

        <Box
          sx={{
            width: "20%",
            color: "text.primary",
            fontSize: 20,
            fontWeight: "medium",
          }}
          className={styles.card}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.</p>

          <p>Learn about Next.</p>
          <p>Learn about Next.</p>

          <p>Learn about Next.</p>
        </Box>

        <Box
          sx={{
            width: "20%",
            color: "text.primary",
            fontSize: 20,
            fontWeight: "medium",
          }}
          className={styles.card}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>

          <p>Learn about Next.</p>

          <p className={styles.borderBottom}>Learn about Next.</p>
        </Box>
      </Box>

      <Box marginTop="30px" className={styles.grid}>
        <Box
          sx={{
            width: "20%",
          }}
          className={styles.card}
        >
          <p className={styles.borderBottom}>Learn about Next.</p>
        </Box>

        <Box
          sx={{
            width: "20%",
          }}
          className={styles.card}
        >
          <p className={styles.borderBottom}>Learn about Next.</p>
        </Box>

        <Box
          sx={{
            width: "20%",
          }}
          className={styles.card}
        >
          <p className={styles.borderBottom}>Learn about Next.</p>
        </Box>
      </Box>
    </>
  );
};

export default FooterTop;
