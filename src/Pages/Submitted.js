import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// Import Component
import Navbar from "../Component/Navbar";
import Stepper from "../Component/Stepper";
import Colors from "../Theme/Color";
// Import Icon
import QrCode2Icon from "@mui/icons-material/QrCode2";
// Import React router
import { Link } from "react-router-dom";

// Costum Button
const BackButton = styled(Button)(({ theme }) => ({
  color: Colors.white,
  backgroundColor: Colors.seaGreen,
  "&:hover": {
    backgroundColor: Colors.seaGreen,
  },
}));

export default function Submitted() {
  return (
    <>
      <Container justifyContent="center" alignItems="center">
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10} justifyContent="center" alignItems="center">
          <Stepper />
          <Typography
            mt={3}
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Scan QRCode berikut:
          </Typography>

          <Grid
            container
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <QrCode2Icon
                sx={{
                  width: 140,
                  height: 140,
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 16,
                  color: Colors.lightGray,
                }}
              >
                Tunjukkan QRCode ke petugas dojo untuk verifikasi pendaftaran
              </Typography>
            </Grid>

            <Grid item xs={12} mt={20} mb={3}>
              {/* Button Back */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <BackButton
                  variant="contained"
                  onClick
                  sx={{
                    width: "100%",
                    height: 40,
                    fontSize: 14,
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Kembali ke Beranda
                </BackButton>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
