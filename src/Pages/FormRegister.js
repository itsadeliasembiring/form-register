import React from "react";
// Import Component MUI
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
// Import icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// Import Component
import Navbar from "../Component/Navbar";
import Stepper from "../Component/Stepper";
import Colors from "../Theme/Color";
// Import React router
import { Link } from "react-router-dom";

// Styles
const useStyles = makeStyles(() => ({
  fontSize: {
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
      fontSize: 16,
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
  BackButton: {
    color: Colors.white,
    backgroundColor: Colors.seaGreen,
    "&:hover": {
      backgroundColor: Colors.seaGreen,
    },
  },
}));
// Costum Button
const BackButton = styled(Button)(({ theme }) => ({
  color: Colors.white,
  backgroundColor: Colors.seaGreen,
  "&:hover": {
    backgroundColor: Colors.seaGreen,
  },
}));
// Costum Text Field
const TextFields = styled(TextField)({
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
});

export default function FormRegister() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10}>
          <Stepper />
          <Typography
            sx={{ mt: 2, fontSize: 20, fontWeight: "bold", align: "left" }}
            gutterBottom
          >
            Lengkapi Data
          </Typography>

          <Grid container direction={"row"} spacing={3}>
            {/* Profil */}
            <Grid item sx={{ color: Colors.seaGreen }} xs={3}>
              <AccountCircleIcon sx={{ width: 80, height: 80 }} />
            </Grid>
            <Grid item xs>
              {/* Name */}
              <Grid item>
                <TextFields
                  placeholder="Nama Lengkap"
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 1,
                    },
                  }}
                ></TextFields>
              </Grid>
              {/* Gender */}
              <Grid item mt={1}>
                <FormControl className={classes.genderLabel}>
                  <FormLabel id="gender">Jenis Kelamin</FormLabel>
                  <RadioGroup row aria-labelledby="gender">
                    <FormControlLabel
                      className={classes.fontSize}
                      value="laki-laki"
                      control={<Radio className={classes.radioButton} />}
                      label="Laki-Laki"
                    />
                    <FormControlLabel
                      className={classes.fontSize}
                      value="perempuan"
                      control={<Radio className={classes.radioButton} />}
                      label="Perempuan"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item xs={7}>
              {/* Tempat lahir */}
              <TextFields
                placeholder="Tempat Lahir"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 0,
                  },
                }}
              ></TextFields>
            </Grid>
            {/* Tanggal lahir */}
            <Grid item xs alignItems={"right"}>
              <input
                type="date"
                style={{
                  color: Colors.seaGreen,
                  width: 133,
                  height: 30,
                  borderRadius: 7,
                  border: "1.5px solid",
                  borderColor: Colors.lightGray,
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1.3} mt={0.5}>
            <Grid item xs={12}>
              {/* Alamat */}
              <TextFields
                placeholder="Alamat"
                multiline
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 60,
                  },
                }}
              ></TextFields>
            </Grid>
            {/* Alasan Mendaftar */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Alasan mendaftar"
                multiline
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 50,
                  },
                }}
              ></TextFields>
            </Grid>
            {/* Checkbox */}
            <Grid item>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", align: "left" }}
              >
                Apakah Anda
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox className={classes.checkbox} />}
                  label="Telah terdaftar dojo sebelumnya"
                  className={classes.fontSize}
                />
                <FormControlLabel
                  control={<Checkbox className={classes.checkbox} />}
                  label="Orang tua peserta"
                  className={classes.fontSize}
                />
              </FormGroup>
            </Grid>

            {/* Nama Perguruan */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Nama Perguruan"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            {/* Nama Dojo */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Nama Dojo"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            {/* Nama Pelatih */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Nama Pelatih"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            {/* Alasan Pindah */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Alasan Pindah"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            {/* Ujian Terakhir */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Ujian Terakhir"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>
          </Grid>
          {/* Tingkatan Terakhir&Upload Ijazah */}
          <Grid container spacing={1.3} mt={0.2} alignItems="center">
            <Grid item xs={7}>
              <TextFields
                placeholder="Tingkatan Terakhir"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>
            {/* Button Upload */}
            <Grid item xs>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                id="buttonfile"
                hidden
              />
              <label htmlFor="buttonfile">
                <Button
                  variant="contained"
                  color="warning"
                  onClick
                  component="span"
                  sx={{
                    width: "100%",
                    height: 35,
                    fontSize: 12,
                    textTransform: "capitalize",
                    boxShadow: "none",
                  }}
                >
                  Upload Ijazah
                </Button>
              </label>
            </Grid>
          </Grid>

          <Grid container spacing={1.3} mt={0.2} alignItems="center">
            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: 14, fontWeight: "bold", align: "left" }}
              >
                Informasi Orang Tua
              </Typography>
            </Grid>
            {/* Nama Orang Tua */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Nama Orang Tua"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>
            {/* Nomor Telepon Orang Tua */}
            <Grid item xs={12}>
              <TextFields
                placeholder="Nomor Telepon Orang Tua"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", align: "left" }}
              >
                Seragam
              </Typography>
            </Grid>
            {/* Pilihan beli seragam */}
            <Grid item xs={12}>
              <FormControl className={classes.seragamLabel}>
                <FormLabel id="beliseragam">Beli Seragam</FormLabel>
                <RadioGroup
                  aria-labelledby="beliseragam"
                  defaultValue="ya"
                  name="radio-buttons-group"
                  className={classes.radioButton}
                >
                  <FormControlLabel
                    className={classes.fontSize}
                    value="ya"
                    control={<Radio />}
                    label="Ya"
                  />
                  <FormControlLabel
                    className={classes.fontSize}
                    value="tidak"
                    control={<Radio />}
                    label="Tidak"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Ukuran Seragam */}
            <Grid item xs={12}>
              <FormControl className={classes.seragamLabel}>
                <FormLabel id="size">Ukuran</FormLabel>
                <RadioGroup
                  aria-labelledby="size"
                  defaultValue="M"
                  name="ukuranseragam"
                  className={classes.radioButton}
                >
                  <FormControlLabel
                    className={classes.fontSize}
                    value="S"
                    control={<Radio />}
                    label="S"
                  />
                  <FormControlLabel
                    className={classes.fontSize}
                    value="M"
                    control={<Radio />}
                    label="M"
                  />
                  <FormControlLabel
                    className={classes.fontSize}
                    value="L"
                    control={<Radio />}
                    label="L"
                  />
                  <FormControlLabel
                    className={classes.fontSize}
                    value="XL"
                    control={<Radio />}
                    label="XL"
                  />
                  <FormControlLabel
                    className={classes.fontSize}
                    value="XXL"
                    control={<Radio />}
                    label="XXL"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={1} mt={0.2} mb={2} alignItems="center">
            <Grid item xs={6}>
              {/* Button Back */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <BackButton
                  variant="contained"
                  onClick
                  sx={{
                    width: "100%",
                    height: 40,
                    fontSize: 14,
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Kembali
                </BackButton>
              </Link>
            </Grid>

            <Grid item xs>
              {/* Button Next */}
              <Link to="/submitted-page" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick
                  sx={{
                    width: "100%",
                    height: 40,
                    fontSize: 14,
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Submit
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
