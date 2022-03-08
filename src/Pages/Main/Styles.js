import { makeStyles } from "@mui/styles";
import Colors from "../../Theme/Color";

export const useStyles = makeStyles(() => ({
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

export const stepper = {
  width: "100%",
  mt: 9,
  pl: 0.5,
};
