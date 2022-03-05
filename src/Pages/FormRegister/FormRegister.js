import React from "react";
import { useState } from "react";
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
import Card from "../../Component/CostCard/Card";
import FormPages from "../FormPages/Form";
import ScanPages from "../ScanPages/Scan";
import SubmittedPages from "../SubmittedPages/Submitted";
import Navbar from "../../Component/Navbar/Navbar";
// Import Data
import { BiayaIuran, Seragam, Sabuk } from "../../Component/CostCard/Data";
// Import Styles
import { useStyles, backButton, nextButton } from "./Styles";

// Label Step
function getSteps() {
  return ["", "", ""];
}

export default function StepperTesting() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [datatotal, setDatatotal] = useState();

  const steps = getSteps();
  const isStepFinish = (step) => {
    return step === 2;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = (data) => {
    console.log(data);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (data.cost) {
      setDatatotal(data);
    } else {
      console.log(data, datatotal);
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
      <Navbar parentBack={handleBack}>Pendaftaran</Navbar>
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
                  <Card
                    BiayaIuran={BiayaIuran}
                    Seragam={Seragam}
                    Sabuk={Sabuk}
                    parentTotal={handleNext}
                  />
                ) : activeStep === 1 ? (
                  <FormPages
                    parentCallback={handleNext}
                    parentCancel={handleBack}
                  />
                ) : (
                  <ScanPages />
                )}
                <div>
                  <Grid container spacing={1} mt={5} mb={3} alignItems="center">
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
