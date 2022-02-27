import React from "react";
import { useState } from "react";
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
  Typography,
  TextField,
} from "@mui/material";
// Import icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  useStyles,
  fontTitle,
  calendar,
  fontSubTitle,
  backButton,
  nextButton,
  uploadButton,
  profile,
} from "./Styles";

const Form = () => {
  const classes = useStyles();
  // State Checkbox Optional Cost
  const [terdaftar, setTerdaftar] = useState(false);
  const handleChangeTerdaftar = () => {
    setTerdaftar(!terdaftar);
  };
  const [orangtua, setOrangtua] = useState(false);
  const handleChangeOrangtua = () => {
    setOrangtua(!orangtua);
  };
  // State Upload Ijazah
  const [file, setFile] = useState("");
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <Container>
        <Box>
          <Typography sx={fontTitle} gutterBottom>
            Lengkapi Data
          </Typography>

          <Grid container direction={"row"} spacing={3}>
            {/* Profil */}
            <Grid item xs={3}>
              <AccountCircleIcon sx={profile} />
            </Grid>
            <Grid item xs>
              {/* Name */}
              <Grid item>
                <TextField
                  placeholder="Nama Lengkap"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 1,
                    },
                  }}
                ></TextField>
              </Grid>
              {/* Gender */}
              <Grid item mt={1}>
                <FormControl className={classes.genderLabel}>
                  <FormLabel id="gender">Jenis Kelamin</FormLabel>
                  <RadioGroup row aria-labelledby="gender">
                    <FormControlLabel
                      className={classes.fontSizeLabel}
                      value="laki-laki"
                      control={<Radio className={classes.radioButton} />}
                      label="Laki-Laki"
                    />
                    <FormControlLabel
                      className={classes.fontSizeLabel}
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
              {/* Place of birth */}
              <TextField
                placeholder="Tempat Lahir"
                className={classes.textField}
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 0,
                  },
                }}
              ></TextField>
            </Grid>
            {/* Birthdate */}
            <Grid item xs alignItems={"right"} justifyContent={"center"}>
              <input type="date" className="calendar" style={calendar} />
            </Grid>
          </Grid>

          <Grid container spacing={1.3} mt={0.5}>
            <Grid item xs={12}>
              {/* Address */}
              <TextField
                placeholder="Alamat"
                className={classes.textField}
                multiline
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 60,
                    padding: 0,
                  },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    paddingTop: "9px",
                  },
                }}
              ></TextField>
            </Grid>
            {/* Reason to register */}
            <Grid item xs={12}>
              <TextField
                placeholder="Alasan mendaftar"
                className={classes.textField}
                multiline
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 60,
                  },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    paddingTop: "9px",
                  },
                }}
              ></TextField>
            </Grid>
          </Grid>

          <Grid container mt={1}>
            {/* Checkbox */}
            <Grid item>
              <Typography sx={fontSubTitle}>Apakah Anda</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      onChange={handleChangeTerdaftar}
                    />
                  }
                  label="Telah terdaftar dojo sebelumnya"
                  className={classes.fontSizeLabel}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      onChange={handleChangeOrangtua}
                    />
                  }
                  label="Orang tua peserta"
                  className={classes.fontSizeLabel}
                />
              </FormGroup>
            </Grid>
          </Grid>
          {/* Terdaftar */}
          {terdaftar && (
            <Grid container spacing={1.3}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Nama Perguruan"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Nama Dojo"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Nama Pelatih"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Alasan Pindah"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Ujian Terakhir"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={7}>
                <TextField
                  placeholder="Tingkatan Terakhir"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>

              {/* Upload Button */}
              <Grid item xs>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .pdf"
                  id="buttonfile"
                  hidden
                  onChange={handleUpload}
                />
                <label htmlFor="buttonfile">
                  <Button onClick component="span" sx={uploadButton}>
                    Upload Ijazah
                  </Button>
                </label>
              </Grid>
              {/* FileName */}
              <Grid item xs={12} Align={"right"} mt={-1}>
                <Typography fontSize={13} fontWeight={"bold"}>
                  {file.name}
                </Typography>
              </Grid>
            </Grid>
          )}
          {/* Orangtua */}
          {orangtua && (
            <Grid container spacing={1.3} mt={0.1} alignItems="center">
              <Grid item xs={12}>
                <Typography sx={fontTitle}>Informasi Orang Tua</Typography>
              </Grid>
              {/* Nama Orang Tua */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Nama Orang Tua"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>
              {/* Nomor Telepon Orang Tua */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Nomor Telepon Orang Tua"
                  className={classes.textField}
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 5,
                    },
                  }}
                ></TextField>
              </Grid>
            </Grid>
          )}

          {/* Seragam */}
          <Grid container spacing={1} mt={0.5}>
            <Grid item xs={12}>
              <Typography sx={fontTitle}>Seragam</Typography>
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
                    className={classes.fontSizeLabel}
                    value="ya"
                    control={<Radio />}
                    label="Ya"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
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
                    className={classes.fontSizeLabel}
                    value="S"
                    control={<Radio />}
                    label="S"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    value="M"
                    control={<Radio />}
                    label="M"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    value="L"
                    control={<Radio />}
                    label="L"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    value="XL"
                    control={<Radio />}
                    label="XL"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    value="XXL"
                    control={<Radio />}
                    label="XXL"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          {/* Button */}
          <Grid container spacing={1} mt={0.2} mb={2} alignItems="center">
            <Grid item xs={6}>
              {/* Button Back */}
              <Button onClick sx={backButton}>
                Kembali
              </Button>
            </Grid>
            <Grid item xs>
              {/* Button Next */}
              <Button onClick sx={nextButton}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Form;
