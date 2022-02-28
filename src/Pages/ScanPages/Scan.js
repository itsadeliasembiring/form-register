import React from "react";
// Import Component MUI
import { Button, Grid, Typography } from "@mui/material";
// Import Icon
import QrCode2Icon from "@mui/icons-material/QrCode2";
// Import Styles
import { fontTitle, fontDescription, icon } from "./Styles";
const Scan = () => {
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
        mb={15}
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
    </>
  );
};
export default Scan;
