import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const useStyles = makeStyles({
  contentRoot: {
    borderColor: "red",
  },
  connectorLine: {
    borderColor: "red",
  },
});

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  return (
    <Stepper activeStep={1} alternativeLabel sx={{ width: "100%" }}>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
    </Stepper>
  );
}
