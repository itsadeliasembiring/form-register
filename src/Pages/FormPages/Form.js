import React from "react";
import { useState } from "react";
// Import Component MUI
import {
  Button,
  Checkbox,
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
import Profile from "../../Component/PreviewImage";
import {
  useStyles,
  fontTitle,
  calendar,
  fontSubTitle,
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

  const [nama, setNama] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [tempatlahir, setTempatlahir] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [alasanmendaftar, setAlasanmendaftar] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [perguruan, setPerguruan] = useState("");
  const [dojo, setDojo] = useState("");
  const [pelatih, setPelatih] = useState("");
  const [alasanpindah, setAlasanpindah] = useState("");
  const [ujianterakhir, setUjianterakhir] = useState("");
  const [tingkatan, setTingkatan] = useState("");
  const [ijazah, setIjazah] = useState("");
  const [namaorangtua, setNamaorangtua] = useState("");
  const [teleponorangtua, setTeleponorangtua] = useState("");
  const [seragam, setSeragam] = useState("");
  const [ukuranseragam, setUkuranseragam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `\n`,
      `Nama: ${nama}`,
      `\n`,
      `Jenis Kelamin: ${jeniskelamin}`,
      `\n`,
      `Tempat Lahir: ${tempatlahir}`,
      `\n`,
      `Tanggal Lahir: ${tanggallahir}`,
      `\n`,
      `Alamat: ${alamat}`,
      `\n`,
      `Alasan Mendaftar: ${alasanmendaftar}`,
      `\n`,
      `Apakah Anda: ${checkbox}`,
      `\n`,
      `Nama Perguruan: ${perguruan}`,
      `\n`,
      `Nama Dojo: ${dojo}`,
      `\n`,
      `Nama Pelatih: ${pelatih}`,
      `\n`,
      `Alasan Pindah: ${alasanpindah}`,
      `\n`,
      `Ujian Terakhir: ${ujianterakhir}`,
      `\n`,
      `Tingkatan Terakhir: ${tingkatan}`,
      `\n`,
      ijazah,
      `\n`,
      `Nama Orang Tua: ${namaorangtua}`,
      `\n`,
      `Nomor Telepon Orang Tua: ${teleponorangtua}`,
      `\n`,
      `Beli Seragam: ${seragam}`,
      `\n`,
      `Ukuran: ${ukuranseragam}`
    );
  };

  return (
    <>
      <Grid container mt={1}>
        <Grid item>
          <Typography sx={fontTitle} gutterBottom>
            Lengkapi Data
          </Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container direction={"row"} spacing={2}>
          {/* Profil */}
          <Grid item xs={3.5}>
            <Profile />
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
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              ></TextField>
              <Button type="submit">Submit</Button>
            </Grid>
            {/* Gender */}
            <Grid item mt={1}>
              <FormControl className={classes.genderLabel} row={true}>
                <FormLabel id="gender">Jenis Kelamin</FormLabel>
                <RadioGroup row aria-labelledby="gender">
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    control={
                      <Radio
                        className={classes.radioButton}
                        onChange={(e) => setJeniskelamin(e.target.value)}
                        value={jeniskelamin}
                      />
                    }
                    label="Laki-Laki"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    control={
                      <Radio
                        className={classes.radioButton}
                        onChange={(e) => setJeniskelamin(e.target.value)}
                        value={jeniskelamin}
                      />
                    }
                    label="Perempuan"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item xs={6}>
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
              onChange={(e) => setTempatlahir(e.target.value)}
              value={tempatlahir}
            ></TextField>
          </Grid>
          {/* Birthdate */}
          <Grid item justifyContent={"center"} xs={6}>
            <input
              type="date"
              className="calendar"
              style={calendar}
              onChange={(e) => setTanggallahir(e.target.value)}
              value={tanggallahir}
            />
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
              onChange={(e) => setAlamat(e.target.value)}
              value={alamat}
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
              onChange={(e) => setAlasanmendaftar(e.target.value)}
              value={alasanmendaftar}
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
                    onChange={
                      (handleChangeTerdaftar,
                      (e) => setCheckbox(e.target.value))
                    }
                    value={checkbox}
                  />
                }
                label="Telah terdaftar dojo sebelumnya"
                className={classes.fontSizeLabel}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkbox}
                    onChange={
                      (handleChangeOrangtua, (e) => setCheckbox(e.target.value))
                    }
                    value={checkbox}
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
                onChange={(e) => setPerguruan(e.target.value)}
                value={perguruan}
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
                onChange={(e) => setDojo(e.target.value)}
                value={dojo}
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
                onChange={(e) => setPelatih(e.target.value)}
                value={pelatih}
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
                onChange={(e) => setAlasanpindah(e.target.value)}
                value={alasanpindah}
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
                onChange={(e) => setUjianterakhir(e.target.value)}
                value={ujianterakhir}
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
                onChange={(e) => setTingkatan(e.target.value)}
                value={tingkatan}
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
                onChange={(e) => setNamaorangtua(e.target.value)}
                value={namaorangtua}
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
                onChange={(e) => setTeleponorangtua(e.target.value)}
                value={teleponorangtua}
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
                  control={
                    <Radio
                      onChange={(e) => setSeragam(e.target.value)}
                      value={seragam}
                    />
                  }
                  label="Ya"
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="tidak"
                  control={
                    <Radio
                      onChange={(e) => setSeragam(e.target.value)}
                      value={seragam}
                    />
                  }
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
                  control={
                    <Radio
                      onChange={(e) => setUkuranseragam(e.target.value)}
                      value={ukuranseragam}
                    />
                  }
                  label="S"
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="M"
                  control={
                    <Radio
                      onChange={(e) => setUkuranseragam(e.target.value)}
                      value={ukuranseragam}
                    />
                  }
                  label="M"
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="L"
                  control={
                    <Radio
                      onChange={(e) => setUkuranseragam(e.target.value)}
                      value={ukuranseragam}
                    />
                  }
                  label="L"
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="XL"
                  control={
                    <Radio
                      onChange={(e) => setUkuranseragam(e.target.value)}
                      value={ukuranseragam}
                    />
                  }
                  label="XL"
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="XXL"
                  control={
                    <Radio
                      onChange={(e) => setUkuranseragam(e.target.value)}
                      value={ukuranseragam}
                    />
                  }
                  label="XXL"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Form;
