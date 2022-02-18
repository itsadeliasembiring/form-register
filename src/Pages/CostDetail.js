import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// Import Component
import Navbar from "../Component/Navbar";
import Stepper from "../Component/Stepper";
import Card from "../Component/Card";
// Import React router
import { Link } from "react-router-dom";

export default function CostDetail() {
  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10}>
          <Stepper />

          <Card />

          <Grid Container>
            <Grid item xs={12} sx={{ mt: 20 }}>
              {/* Button  */}
              <Link to="/form-register" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick
                  sx={{
                    width: "100%",
                    height: 45,
                    fontSize: 15,
                    textTransform: "capitalize",
                    mb: 3,
                    textDecoration: "none",
                  }}
                >
                  Lanjut
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
