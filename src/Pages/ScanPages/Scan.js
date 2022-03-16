import React from "react";
// Import Component MUI
import { Button, Grid, Typography } from "@mui/material";
// Import Icon
import QrCode2Icon from "@mui/icons-material/QrCode2";
// Import Styles
import { fontTitle, fontDescription, icon, finishButton } from "./Styles";

const Scan = (props) => {
  // Finish Button
  const handleFinish = () => {
    props.parentFinish();
  };

  return (
    <>
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
      </Grid>

      {/* Finish button */}
      <Grid container spacing={1} mt={35} mb={3} alignItems="center">
        <Grid item xs={12}>
          <Button onClick={handleFinish} sx={finishButton}>
            Finish
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Scan;
