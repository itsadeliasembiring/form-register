import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
} from "@mui/material";
// Import component
import CostPages from "./CostPages/Cost";
import FormPages from "./FormPages/Form";
import ScanPages from "./ScanPages/Scan";
import SubmittedPages from "./SubmittedPages/Submitted";
import Navbar from "../Component/Navbar/Navbar";
import Colors from "../Theme/Color";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

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
const nextButton = {
  color: Colors.white,
  backgroundColor: Colors.orange,
  "&:hover": {
    backgroundColor: Colors.orange,
  },
  width: "100%",
  height: 40,
  fontSize: 14,
  textTransform: "capitalize",
  textDecoration: "none",
};

// Label Step
function getSteps() {
  return ["", "", ""];
}

export default function StepperTesting() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepBack = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Navbar>Pendaftaran</Navbar>
      <Container>
        {/* Stepper */}
        <Box mt={9} mb={0}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        {/* Content */}
        <Box>
          <div>
            {activeStep === steps.length ? (
              // Submitted Pages
              <div>
                <SubmittedPages />
                {/* Homapage Button */}
                <Button onClick={handleReset} sx={backButton}>
                  Kembali ke Beranda
                </Button>
              </div>
            ) : (
              // Switch Pages
              <div>
                {activeStep === 0 ? (
                  <CostPages />
                ) : activeStep === 1 ? (
                  <FormPages />
                ) : (
                  <ScanPages />
                )}
                <div>
                  <Grid container spacing={1} mt={5} mb={3} alignItems="center">
                    {isStepBack(activeStep) && (
                      <Grid item xs={6}>
                        {/* BACK BUTTON */}
                        <Button onClick={handleBack} sx={backButton}>
                          Kembali
                        </Button>
                      </Grid>
                    )}
                    <Grid item xs>
                      {/*  NEXT BUTTON  */}
                      <Button sx={nextButton} onClick={handleNext}>
                        {activeStep === steps.length - 1 ? "Selesai" : "Lanjut"}
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Container>
    </>
  );
}
