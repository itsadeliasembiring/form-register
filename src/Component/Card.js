import * as React from "react";
// Import Component MUI
import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormGroup,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// Import Icon
import RegisterIcon from "../Assets/Icons/pendaftaran.svg";
import MoneyIcon from "../Assets/Icons/iuran.svg";
import BeltIcon from "../Assets/Icons/sabuk.svg";
import ClothesIcon from "../Assets/Icons/seragam.svg";
// Import Theme
import Colors from "../Theme/Color";

// Styles
const useStyles = makeStyles(() => ({
  checkbox: {
    color: Colors.seaGreen,
    "& svg": {
      color: Colors.seaGreen,
    },
  },
  labelCheckbox: {
    fontSize: "15px",
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <>
      {/* Informasi Biaya */}
      <Card
        sx={{
          width: "100%",
          height: 205,
          mt: 5,
          borderRadius: 2,
          boxShadow: "0px 0px 6px #a1a1a1",
        }}
      >
        <CardContent>
          <Typography fontSize={17} fontWeight="bold" gutterBottom>
            Informasi Biaya
          </Typography>

          {/* List 1 : Biaya Pendaftaran */}
          <Grid container direction={"row"} alignItems={"center"}>
            {/* Icon */}
            <Grid item xs={1.2}>
              <img src={RegisterIcon} width={24} heigth={24} />
            </Grid>
            {/* Item */}
            <Grid item xs={7}>
              <Typography fontSize={15}>Biaya Pendaftaran</Typography>
            </Grid>
            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography fontSize={15} fontWeight={"bold"}>
                Rp. 50.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 2 : Iuran Bulanan*/}
          <Grid container direction={"row"} alignItems={"center"}>
            {/* Icon */}
            <Grid item xs={1.2}>
              <img src={MoneyIcon} width={24} heigth={24} />
            </Grid>
            {/* Item */}
            <Grid item xs={6.5}>
              <Typography fontSize={15}>Iuran Bulanan</Typography>
            </Grid>
            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography fontSize={15} fontWeight={"bold"}>
                Rp. 100.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 3 : Seragam */}
          <Grid container direction={"row"} alignItems={"center"}>
            {/* Icon */}
            <Grid item xs={1.2}>
              <img src={ClothesIcon} width={24} heigth={24} />
            </Grid>
            {/* Item */}
            <Grid item xs={7}>
              <Typography fontSize={15}>Seragam</Typography>
            </Grid>
            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography fontSize={15} fontWeight={"bold"}>
                Rp. 80.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 4 : Sabuk*/}
          <Grid container direction={"row"} alignItems={"center"}>
            {/* Icon */}
            <Grid item xs={1.2}>
              <img src={BeltIcon} width={24} heigth={24} />
            </Grid>
            {/* Item */}
            <Grid item xs={7}>
              <Typography fontSize={15}>Sabuk</Typography>
            </Grid>
            {/* Price */}
            <Grid item textAlign="right" xs mb={1.5}>
              <Typography fontSize={15} fontWeight={"bold"}>
                Rp. 30.000
              </Typography>
            </Grid>
          </Grid>

          <Divider color={Colors.lightGray} />

          {/* Total */}
          <Grid container direction={"row"} alignItems={"center"} mt={1}>
            <Grid item xs={1.2}></Grid>
            <Grid item xs={6.5}>
              <Typography fontSize={16}>Total</Typography>
            </Grid>
            <Grid item textAlign="right" xs>
              <Typography fontSize={15} fontWeight={"bold"}>
                Rp. 260.000
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Biaya Tambahan */}
      <Card
        sx={{
          width: "100%",
          height: 140,
          mt: 5,
          borderRadius: 2,
          boxShadow: "0px 0px 6px #a1a1a1",
        }}
      >
        <CardContent>
          <Typography fontSize={17} fontWeight={"bold"}>
            Biaya Tambahan
          </Typography>

          <FormGroup sx={{ fontSize: 15 }}>
            {/* Checkbox Seragam */}
            <FormControlLabel
              control={<Checkbox className={classes.checkbox} />}
              label="Seragam"
              classes={{ label: classes.labelCheckbox }}
            />
            {/* Checkbox Sabuk */}
            <FormControlLabel
              control={<Checkbox className={classes.checkbox} />}
              label="Sabuk"
              classes={{ label: classes.labelCheckbox }}
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  );
}
