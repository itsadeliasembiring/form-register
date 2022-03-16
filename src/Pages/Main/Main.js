import React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
} from "@mui/material";
// Import Component
import Card from "../../Component/CostCard/Card";
import FormPages from "../FormPages/Form";
import Navbar from "../../Component/Navbar/Navbar";
import ScanPages from "../ScanPages/Scan";
import SubmittedPages from "../SubmittedPages/Submitted";
// Import Data
import { BiayaIuran, Seragam, Sabuk } from "../../Component/CostCard/Data";
// Import Styles
import { useStyles, stepper } from "./Styles";

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

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const isStepFinish = (step) => {
    return step === 2;
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

  const handleFinish = () => {
    isStepFinish(activeStep);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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
          connector={<StepConnector className={classes.connectorLine} />}
          sx={stepper}
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
      </Container>

      <Container>
        {/* Content */}
        <Box>
          <>
            {activeStep === steps.length ? (
              // Submitted Pages
              <>
                <SubmittedPages parentReset={handleReset} />
              </>
            ) : (
              // Switch Pages
              <>
                {activeStep === 0 ? (
                  // Card Pages
                  <Card
                    BiayaIuran={BiayaIuran}
                    Seragam={Seragam}
                    Sabuk={Sabuk}
                    parentTotal={handleNext}
                  />
                ) : activeStep === 1 ? (
                  // Form Pages
                  <FormPages
                    parentCallback={handleNext}
                    parentCancel={handleBack}
                  />
                ) : (
                  // Scan Pages
                  <ScanPages parentFinish={handleFinish} />
                )}
              </>
            )}
          </>
        </Box>
      </Container>
    </>
  );
}
