import { makeStyles } from "@mui/styles";
import Colors from "../../Theme/Color";

export const useStyles = makeStyles(() => ({
  fontSizeLabel: {
    "& span:last-child": {
      fontSize: 14,
    },
  },
  radioButton: {
    "& svg": {
      width: 17,
      height: 17,
      color: Colors.seaGreen,
    },
  },
  genderLabel: {
    "& .MuiFormLabel-root": {
      color: Colors.black,
      fontWeight: "bold",
      fontSize: 14,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: Colors.seaGreen,
    },
  },
  checkbox: {
    color: Colors.seaGreen,
    "& svg": {
      width: 17,
      height: 17,
      color: Colors.seaGreen,
    },
  },
  seragamLabel: {
    "& .MuiFormLabel-root": {
      color: Colors.black,
      fontWeight: "bold",
      fontSize: 14,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: Colors.seaGreen,
    },
  },
  textField: {
    width: "100%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1.5px solid",
      borderColor: Colors.lightGray,
      borderRadius: 7,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
  },
  calendar: {
    width: "100%",
    "& .MuiInputBase-root": {
      fontSize: 12,
      height: 34.5,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1.5px solid",
      borderColor: Colors.lightGray,
      borderRadius: 7,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
    "& svg": {
      color: Colors.seaGreen,
    },
  },
  datePicker: {
    "& .MuiInputBase-root": {
      height: 1.4,
    },
  },
}));

export const fontTitle = {
  fontSize: 16,
  fontWeight: "bold",
  align: "left",
};

export const fontSubTitle = {
  fontSize: 14,
  fontWeight: "bold",
  align: "left",
};

export const calendar = {
  width: "100%",
  "& .MuiInputBase-root .MuiOutlinedInput-root": {
    border: "1.5px solid",
    borderColor: Colors.lightGray,
    borderRadius: 7,
  },
  "&:hover .MuiInputBase-root .MuiOutlinedInput-root": {
    borderColor: Colors.lightGray,
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-root": {
    borderColor: Colors.lightGray,
  },
};

export const backButton = {
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
};

export const uploadButton = {
  color: Colors.white,
  backgroundColor: Colors.orange,
  "&:hover": {
    backgroundColor: Colors.orange,
  },
  width: "100%",
  height: 35,
  fontSize: 12,
  textTransform: "capitalize",
  boxShadow: "none",
};
