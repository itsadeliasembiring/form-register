import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid } from "@mui/material";
// Import Component
import Navbar from "../Component/Navbar";
import Card from "../Component/CostCard/Card";
import Colors from "../Theme/Color";

export default function CostDetail() {
  // Styles
  const buttonStyles = {
    color: Colors.white,
    backgroundColor: Colors.orange,
    "&:hover": {
      backgroundColor: Colors.orange,
    },
    width: "100%",
    height: 45,
    fontSize: 15,
    textTransform: "capitalize",
    boxShadow: "none",
    mb: 3,
  };

  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10}>
          <Card />
          <Grid Container>
            <Grid item xs={12} sx={{ mt: 20 }}>
              {/* Button  */}
              <Button onClick sx={buttonStyles}>
                Lanjut
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
