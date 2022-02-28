import React from "react";
// Import Component MUI
import { Grid, Typography } from "@mui/material";
// Import Styles
import { fontTitle, icon } from "./Styles";
// Import Icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Submitted = () => {
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
    </>
  );
};
export default Submitted;
