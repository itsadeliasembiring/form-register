// Import Theme
import Colors from "../../Theme/Color";

export const fontTitle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 23,
};

export const fontDescription = {
  textAlign: "center",
  fontSize: 15,
  color: Colors.gray,
};

export const icon = {
  width: 140,
  height: 140,
};

export const finishButton = {
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
