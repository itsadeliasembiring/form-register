import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// Import Component
import Colors from "../Theme/Color";
// Import Icon
import QrCode2Icon from "@mui/icons-material/QrCode2";

//Styles
const backButton = {
  color: Colors.white,
  backgroundColor: Colors.seaGreen,
  "&:hover": {
    backgroundColor: Colors.seaGreen,
  },
  width: "100%",
  height: 40,
  fontSize: 14,
  textTransform: "capitalize",
  textDecoration: "none",
};
const fontTitle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 23,
};
const fontDescription = {
  textAlign: "center",
  fontSize: 15,
  color: Colors.gray,
};
const icon = {
  width: 140,
  height: 140,
};
const SubmittedPages = () => {
  return (
    <>
      <Container justifyContent="center" alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Typography mt={3} sx={fontTitle}>
            Scan QRCode berikut:
          </Typography>

          <Grid
            container
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <QrCode2Icon sx={icon} />
            </Grid>
            <Grid item>
              <Typography sx={fontDescription}>
                Tunjukkan QRCode ke petugas dojo untuk verifikasi pendaftaran
              </Typography>
            </Grid>

            <Grid item xs={12} mt={30} mb={3}>
              {/* Button Back */}
              <Button variant="contained" onClick sx={backButton}>
                Kembali ke Beranda
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default SubmittedPages;
