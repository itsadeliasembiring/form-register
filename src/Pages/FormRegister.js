import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
  StepConnector,
} from "@mui/material";
// Import component
import CostPages from "./CostPages/Cost";
import FormPages from "./FormPages/Form";
import ScanPages from "./ScanPages/Scan";
import SubmittedPages from "./SubmittedPages/Submitted";
import Navbar from "../Component/Navbar/Navbar";
import Colors from "../Theme/Color";

const useStyles = makeStyles(() => ({
  step: {
    "& .MuiStepIcon-text": {
      fontSize: 12,
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root": {
      width: 32,
      height: 32,
      border: "0.5px solid",
      borderRadius: "100%",
      borderColor: Colors.gray,
      color: Colors.lightGray,
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: Colors.seaGreen,
      backgroundColor: Colors.seaGreen,
      border: "0.5px solid",
      borderRadius: "100%",
      borderColor: Colors.seaGreenDark,
    },
    "& .MuiStepLabel-root.Mui-completed": {
      backgroundColor: Colors.stepColor,
    },
    "& .MuiSvgIcon-root.Mui-completed": {
      borderColor: Colors.seaGreenDark,
      backgroundColor: Colors.seaGreen,
    },
    "& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed": {
      color: Colors.aqua,
    },
  },
  connectorLine: {
    "& 	.MuiStepConnector-line": {
      borderColor: Colors.connectorColor,
      borderTopWidth: 3,
      borderRadius: 7,
    },
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
  bottom: 0,
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
  bottom: 0,
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

  const isStepNext = (step) => {
    return step === 0;
  };
  const isStepSubmitBack = (step) => {
    return step === 1;
  };
  const isStepFinish = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const onsubmit = (data) => {
    console.log(data);
  };
  const handleNext = (data) => {
    console.log(data);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // setOnsubmit(true);
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

        <Stepper
          activeStep={activeStep}
          sx={{ width: "100%", mt: 9 }}
          connector={<StepConnector className={classes.connectorLine} />}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} className={classes.step}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {/* Content */}
        <Box>
          <div>
            {activeStep === steps.length ? (
              // Submitted Pages
              <div>
                <SubmittedPages />
                {/* Homepage Button */}
                <Grid container spacing={1} mt={25} mb={3} alignItems="center">
                  <Grid item xs={12}>
                    <Button onClick={handleReset} sx={backButton}>
                      Kembali ke Beranda
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ) : (
              // Switch Pages
              <div>
                {activeStep === 0 ? (
                  <CostPages />
                ) : activeStep === 1 ? (
                  <FormPages dataForm={onsubmit} />
                ) : (
                  <ScanPages />
                )}
                <div>
                  {isStepSubmitBack(activeStep) && (
                    <Grid
                      container
                      spacing={1}
                      mt={5}
                      alignItems="center"
                      direction={"row"}
                    >
                      {/* BACK BUTTON */}
                      <Grid item xs={6}>
                        <Button onClick={handleBack} sx={backButton}>
                          Kembali
                        </Button>
                      </Grid>
                      {/* SUBMIT BUTTON */}
                      <Grid item xs>
                        <Button onClick={onsubmit} sx={nextButton}>
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  )}

                  <Grid container spacing={1} mt={5} mb={3} alignItems="center">
                    {/*  NEXT BUTTON  */}
                    {isStepNext(activeStep) && (
                      <Grid item xs={12}>
                        <Button onClick={handleNext} sx={nextButton}>
                          Lanjut
                        </Button>
                      </Grid>
                    )}
                    {isStepFinish(activeStep) && (
                      <Grid item xs={12}>
                        <Button onClick={handleNext} sx={nextButton}>
                          Finish
                        </Button>
                      </Grid>
                    )}
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
