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
  dividerColor: {
    backgroundColor: Colors.lightGray,
  },
  grid: {
    direction: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  iconSize: {
    width: 24,
    height: 24,
  },
  total: { color: Colors.seaGreen },
}));

export const cardStyles = {
  width: "100%",
  mt: 3,
  borderRadius: 2,
  boxShadow: "0px 0px 6px #a1a1a1",
};

export const cardContent = {
  padding: "16px",
  "&:last-child": {
    paddingBottom: "16px",
  },
};

export const fontTitle = {
  fontSize: 17,
  fontWeight: "bold",
};

export const fontSize = {
  fontSize: 15,
};

export const nextButton = {
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
