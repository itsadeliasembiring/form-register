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
  iconSize: {
    width: 24,
    height: 24,
  },
  grid: {
    direction: "row",
    alignItems: "center",
    marginBottom: 1,
  },
}));

export const cardStyles = {
  width: "100%",
  mt: 5,
  borderRadius: 2,
  boxShadow: "0px 0px 6px #a1a1a1",
};

export const fontTitle = {
  fontSize: 17,
  fontWeight: "bold",
};

export const fontSize = {
  fontSize: 15,
};
