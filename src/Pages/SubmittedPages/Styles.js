// Import Theme
import Colors from "../../Theme/Color";

export const fontTitle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 22,
};

export const icon = {
  width: 100,
  height: 100,
  color: Colors.seaGreen,
};

export const homepageButton = {
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
