import React from "react";
// Import Component MUI
import { Button, Grid, Typography } from "@mui/material";
// Import Styles
import { fontTitle, icon, homepageButton } from "./Styles";
// Import Icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Submitted = (props) => {
  // Back To Homepage Button
  const handleReset = () => {
    props.parentReset();
  };

  return (
    <>
      <Grid
        container
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Grid item xs={12}>
          <CheckCircleIcon sx={icon} />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={fontTitle}>Data berhasil disubmit!</Typography>
        </Grid>
      </Grid>

      {/* Back To Homepage Button */}
      <Grid container spacing={1} mt={25} mb={3} alignItems="center">
        <Grid item xs={12}>
          <Button onClick={handleReset} sx={homepageButton}>
            Kembali ke Beranda
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Submitted;
