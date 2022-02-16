import React from "react";
// Import Component MUI
import {
  Box,
  Button,
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
// Import Component
import Navbar from "../Component/Navbar";
import Stepper from "../Component/Stepper";
import Colors from "../Theme/Color";

export default function FormRegister() {
  // Costum TextField
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

  return (
    <>
      <Container>
        <Navbar>Pendaftaran</Navbar>
        <Box mt={10}>
          <Stepper />

          <Typography
            sx={{ mt: 2, fontSize: 20, fontWeight: "bold", align: "left" }}
          >
            Lengkapi Data
          </Typography>

          <Grid Container mt={1}>
            <Grid item sx={{ display: "flex" }}>
              <Grid item sx={{ color: Colors.seaGreen }} mr={3}>
                <AccountCircleIcon sx={{ width: 70, height: 70 }} />
              </Grid>

              <Grid item>
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

                <Grid item mt={1}>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        color: Colors.black,
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Jenis Kelamin
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="laki-laki"
                        control={<Radio />}
                        label="Laki-Laki"
                      />
                      <FormControlLabel
                        value="perempuan"
                        control={<Radio />}
                        label="Perempuan"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={6} mr={1}>
                <TextFields
                  placeholder="Tempat Lahir"
                  inputProps={{
                    style: {
                      fontSize: 12,
                      height: 1,
                    },
                  }}
                ></TextFields>
              </Grid>

              <Grid item xs={6}>
                <input type="date" style={{ color: Colors.seaGreen }} />
              </Grid>
            </Grid>

            <Grid item xs={12} mt={1}>
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

            <Grid item xs={12} mt={1}>
              <TextFields
                placeholder="Alasan Mendaftar"
                multiline
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 50,
                  },
                }}
              ></TextFields>
            </Grid>

            <Grid item mt={1}>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", align: "left" }}
              >
                Apakah Anda
              </Typography>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: Colors.seaGreen,
                        "&.Mui-checked": {
                          color: Colors.seaGreen,
                        },
                      }}
                    />
                  }
                  label="Telah terdaftar dojo sebelumnya"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: Colors.seaGreen,
                        "&.Mui-checked": {
                          color: Colors.seaGreen,
                        },
                      }}
                    />
                  }
                  label="Orang tua peserta"
                />
              </FormGroup>
            </Grid>

            <Grid item mt={1}>
              <TextFields
                placeholder="Nama Lengkap"
                inputProps={{
                  style: {
                    fontSize: 12,
                    height: 5,
                  },
                }}
              ></TextFields>
            </Grid>

            <Grid item mt={1}>
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

            <Grid item mt={1}>
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

            <Grid item mt={1}>
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

            <Grid item mt={1}>
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

            <Grid item mt={1}>
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

            <Grid
              item
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={6} mt={1} mr={1}>
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

              <Grid item xs={6}>
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
                    sx={{
                      width: "100%",
                      height: 35,
                      fontSize: 10,
                      textTransform: "capitalize",
                    }}
                  >
                    Upload Ijazah
                  </Button>
                </label>
              </Grid>
            </Grid>

            <Grid item mt={1}>
              <Typography
                sx={{ fontSize: 12, fontWeight: "bold", align: "left" }}
              >
                Informasi Orang Tua
              </Typography>
            </Grid>

            <Grid item mt={1}>
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

            <Grid item mt={1}>
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

            <Grid item mt={1}>
              <Typography
                sx={{ fontSize: 13, fontWeight: "bold", align: "left" }}
              >
                Seragam
              </Typography>
            </Grid>

            <Grid item mt={1}>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontSize: 12, fontWeight: "bold", align: "left" }}
                >
                  Beli Seragam
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="ya"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="ya" control={<Radio />} label="Ya" />
                  <FormControlLabel
                    value="tidak"
                    control={<Radio />}
                    label="Tidak"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item mt={1}>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontSize: 12, fontWeight: "bold", align: "left" }}
                >
                  Ukuran
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="M"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="S" control={<Radio />} label="S" />
                  <FormControlLabel value="M" control={<Radio />} label="M" />
                  <FormControlLabel value="L" control={<Radio />} label="L" />
                  <FormControlLabel value="XL" control={<Radio />} label="XL" />
                  <FormControlLabel
                    value="XXL"
                    control={<Radio />}
                    label="XXL"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
