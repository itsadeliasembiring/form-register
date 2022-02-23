import { makeStyles } from "@mui/styles";
import Colors from "../../Theme/Color";

export const useStyles = makeStyles(() => ({
  checkbox: {
    color: Colors.seaGreen,
    "& svg": {
      color: Colors.seaGreen,
    },
  },
  labelCheckbox: {
    fontSize: "15px",
  },
  cardContent: {
    padding: "16px",
    "&:last-child": {
      paddingBottom: "15px",
    },
  },
}));
