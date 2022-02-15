import React from "react";
// Import Component MUI
import { Container, Typography } from "@mui/material";
// Import Component
import Navbar from "../Component/Navbar";

export default function FormRegister() {
  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Typography mt={10}>Hello World</Typography>
      </Container>
    </>
  );
}
