import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid } from "@mui/material";
// Import Component
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";

export default function CostPage() {
  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10}>
          <Card />

          <Grid Container>
            <Grid item xs={12} sx={{ mt: 20 }}>
              {/* Button  */}
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
