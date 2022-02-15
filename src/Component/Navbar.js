import React from "react";
// Import Component MUI
import { AppBar, Box, IconButton, Typography } from "@mui/material";
// Import Icon
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Link } from "react-router-dom";
// Import Theme
import Colors from "../Theme/Color";

export default function Navbar(props) {
  return (
    <>
      <AppBar
        position="fixed"
        elevation="none"
        sx={{
          width: "100%",
          height: "55px",
          alignItem: "center",
          bgcolor: Colors.navbarColor,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Icon */}
          <IconButton
            onClick
            sx={{
              pt: 1.5,
              mr: 0.5,
              ml: 0.5,
              color: Colors.white,
            }}
          >
            <ArrowBackTwoToneIcon sx={{ fontSize: 30 }} />
          </IconButton>

          {/* Title */}
          <Typography sx={{ fontSize: 18, pt: 1.7 }}>
            {props.children}
          </Typography>
        </Box>
      </AppBar>
    </>
  );
}
