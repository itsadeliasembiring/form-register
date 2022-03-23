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
  TextField,
  Typography,
  Stack,
} from "@mui/material";
// Import Date
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// Import Icon
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// Import Styles
import {
  fontTitle,
  fontSubTitle,
  divProfile,
  imgProfile,
  uploadProfile,
  uploadButton,
  backButton,
  nextButton,
  useStyles,
} from "./Styles";
import axios from "axios";

const Form = (props) => {
  const classes = useStyles();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  // State Form
  const [profileImage, setProfileImage] = React.useState(null);
  const [nama, setNama] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [tempatlahir, setTempatlahir] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [alasanmendaftar, setAlasanmendaftar] = useState("");
  const [terdaftar, setTerdaftar] = useState(false);
  const [perguruan, setPerguruan] = useState("");
  const [dojo, setDojo] = useState("");
  const [pelatih, setPelatih] = useState("");
  const [alasanpindah, setAlasanpindah] = useState("");
  const [ujianterakhir, setUjianterakhir] = useState("");
  const [tingkatan, setTingkatan] = useState("");
  const [file, setFile] = useState("");
  const [orangtua, setOrangtua] = useState(false);
  const [namaorangtua, setNamaorangtua] = useState("");
  const [teleponorangtua, setTeleponorangtua] = useState("");
  const [seragam, setSeragam] = useState(true);
  const [beliseragam, setBeliSeragam] = useState("");
  const [ukuranseragam, setUkuranseragam] = useState("");

  // Filename Ijazah
  const filename = file.name;
  // Upload Ijazah
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
  // Upload Image
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setProfileImage(file.name);
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  // Checkbox
  const handleChangeTerdaftar = () => {
    setTerdaftar(!terdaftar);
  };
  const handleChangeOrangtua = () => {
    setOrangtua(!orangtua);
  };
  const handleChangeSeragam = () => {
    setSeragam(!seragam);
  };

  // Submit Button
  const handleSubmit = (event) => {
    const dataSend = {
      profileImage,
      nama,
      jeniskelamin,
      tempatlahir,
      tanggallahir,
      alamat,
      alasanmendaftar,
      perguruan,
      dojo,
      pelatih,
      ujianterakhir,
      tingkatan,
      filename,
      namaorangtua,
      teleponorangtua,
      beliseragam,
      ukuranseragam,
    };
    props.parentCallback(dataSend);
    event.preventDefault();
    // Post To API
    const json = {
      profile: profileImage,
      name: nama,
      gender: jeniskelamin,
      placeOfBirth: tempatlahir,
      dateOfBirth: tanggallahir,
      address: alamat,
      reasonRegister: alasanmendaftar,
      college: perguruan,
      dojoName: dojo,
      trainer: pelatih,
      finalExam: ujianterakhir,
      level: tingkatan,
      fileCertificate: filename,
      parentName: namaorangtua,
      parentPhoneNumber: teleponorangtua,
      buyUniform: beliseragam,
      sizeUniform: ukuranseragam,
    };
    axios.post("http://localhost:8000/users/add", json).then((result) => {
      console.log(result);
    });
  };
  // Cancel Button
  const handleCancel = () => {
    props.parentCancel();
  };
  // Date
  const handleDate = (newValue) => {
    setTanggallahir(newValue);
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
          {/* Profile Image */}
          <Grid item xs={3.5}>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{ display: "none" }}
              />
              <div style={divProfile}>
                <img ref={uploadedImage} style={imgProfile} />
              </div>
              {/* Button Upload Profile Image */}
              <AddCircleOutlineRoundedIcon
                onClick={() => imageUploader.current.click()}
                sx={uploadProfile}
              />
            </div>
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
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              ></TextField>
            </Grid>
            {/* Gender */}
            <Grid item mt={1}>
              <FormControl className={classes.genderLabel} row={true}>
                <FormLabel id="gender">Jenis Kelamin</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender"
                  onChange={(e) => setJeniskelamin(e.target.value)}
                >
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    control={<Radio className={classes.radioButton} />}
                    label="Laki-Laki"
                    value="Laki-laki"
                  />
                  <FormControlLabel
                    className={classes.fontSizeLabel}
                    control={<Radio className={classes.radioButton} />}
                    label="Perempuan"
                    value="Perempuan"
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={7}>
                <DesktopDatePicker
                  placeholder="Date desktop"
                  inputFormat="dd/MM/yyyy"
                  value={tanggallahir}
                  onChange={handleDate}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={classes.textFieldCalendar}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
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

        {/* Registered */}
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
            {/* File Name */}
            <Grid item xs={12} Align={"right"} mt={-1}>
              <Typography fontSize={13} fontWeight={"bold"}>
                {file.name}
              </Typography>
            </Grid>
          </Grid>
        )}

        {/* Parent */}
        {orangtua && (
          <Grid container spacing={1.3} mt={0.1} alignItems="center">
            <Grid item xs={12}>
              <Typography sx={fontTitle}>Informasi Orang Tua</Typography>
            </Grid>
            {/* Parent Name */}
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
            {/* Parent Phone Number */}
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
          {/* To choose buy or not */}
          <Grid item xs={12}>
            <FormControl className={classes.seragamLabel}>
              <FormLabel id="beliseragam">Beli Seragam</FormLabel>
              <RadioGroup
                name="beliseragam"
                className={classes.radioButton}
                onChange={(e) => setBeliSeragam(e.target.value)}
              >
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="Ya"
                  control={<Radio />}
                  label="Ya"
                  onChange={handleChangeSeragam}
                />
                <FormControlLabel
                  className={classes.fontSizeLabel}
                  value="Tidak"
                  control={<Radio />}
                  label="Tidak"
                  onChange={handleChangeSeragam}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Choose size */}
          {!seragam && (
            <Grid item xs={12}>
              <FormControl className={classes.seragamLabel}>
                <FormLabel id="size">Ukuran</FormLabel>
                <RadioGroup
                  name="ukuranseragam"
                  className={classes.radioButton}
                  onChange={(e) => setUkuranseragam(e.target.value)}
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
          )}
        </Grid>

        {/* Button */}
        <Grid
          container
          spacing={1}
          mt={5}
          mb={3}
          alignItems="center"
          direction={"row"}
        >
          {/* Back Button */}
          <Grid item xs={6}>
            <Button onClick={handleCancel} sx={backButton}>
              Kembali
            </Button>
          </Grid>
          {/* Submit Button */}
          <Grid item xs>
            <Button onClick={handleSubmit} sx={nextButton}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Form;
