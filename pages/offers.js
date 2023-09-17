import * as React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Offers() {
  return (
    <Container>
      <AppBar>
        <Typography variant="h6" sx={{ textAlign: "center", paddingY: 2 }}>
          Offers
        </Typography>
      </AppBar>
      <Toolbar />


    </Container>
  );
};
