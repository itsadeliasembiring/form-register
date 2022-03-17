import React from "react";
// Import Component MUI
import { AppBar, Box, IconButton, Typography } from "@mui/material";
// Import Icon
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
// Import Styles
import { appBar, box, iconButton, iconSize, fontTitle } from "./Styles";

export default function Navbar(props) {
  // Back IconButton
  const handleBack = () => {
    props.parentBack();
  };

  return (
    <>
      <AppBar elevation={"none"} sx={appBar}>
        <Box sx={box}>
          {/* Back IconButton */}
          <IconButton onClick={handleBack} sx={iconButton}>
            <ArrowBackTwoToneIcon sx={iconSize} />
          </IconButton>
          {/* Title */}
          <Typography sx={fontTitle}>{props.children}</Typography>
        </Box>
      </AppBar>
    </>
  );
}
