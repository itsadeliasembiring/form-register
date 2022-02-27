import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid } from "@mui/material";
import Card from "../Component/CostCard/Card";
import Colors from "../Theme/Color";
// Import Data
import { BiayaIuran, Seragam, Sabuk } from "../Component/CostCard/Data";

const CostDetail = () => {
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
        <Box>
          <Card BiayaIuran={BiayaIuran} Seragam={Seragam} Sabuk={Sabuk} />
          <Grid Container>
            <Grid item xs={12} sx={{ mt: 20 }}>
              {/* Button  */}
              <Button sx={buttonStyles}>Lanjut</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default CostDetail;
