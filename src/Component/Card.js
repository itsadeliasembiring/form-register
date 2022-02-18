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
import RegisterIcon from "../Icons/pendaftaran.svg";
import MoneyIcon from "../Icons/iuran.svg";
import BeltIcon from "../Icons/sabuk.svg";
import ClothesIcon from "../Icons/seragam.svg";
// Import Theme
import Colors from "../Theme/Color";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: "15px",
  },
  checkbox: {
    color: Colors.seaGreen,
    "&.Mui-checked": {
      color: Colors.seaGreen,
    },
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <>
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
          {/* Title */}
          <Typography
            sx={{ fontSize: 17, fontWeight: "bold", align: "left" }}
            gutterBottom
          >
            Informasi Biaya
          </Typography>
          {/* List 1 */}
          <Grid container direction={"row"} sx={{ alignItems: "center" }}>
            {/* Icon */}
            <Grid item xs={1} color={Colors.gray} mr={0.2}>
              <img src={RegisterIcon} width={24} heigth={24} />
            </Grid>

            {/* Item */}
            <Grid item xs={7}>
              <Typography sx={{ fontSize: 15 }}>Biaya Pendaftaran</Typography>
            </Grid>

            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
                Rp. 50.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 2 */}
          <Grid container direction={"row"} sx={{ alignItems: "center" }}>
            {/* Icon */}
            <Grid item xs={1} color={Colors.gray} mr={0.2}>
              <img src={MoneyIcon} width={24} heigth={24} />
            </Grid>

            {/* Item */}
            <Grid item xs={7}>
              <Typography sx={{ fontSize: 15 }}>Iuran Bulanan</Typography>
            </Grid>

            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
                Rp. 100.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 3 */}
          <Grid container direction={"row"} sx={{ alignItems: "center" }}>
            {/* Icon */}
            <Grid item xs={1} color={Colors.gray} mr={0.2}>
              <img src={ClothesIcon} width={24} heigth={24} />
            </Grid>

            {/* Item */}
            <Grid item xs={7}>
              <Typography sx={{ fontSize: 15 }}>Seragam</Typography>
            </Grid>

            {/* Price */}
            <Grid item textAlign="right" xs>
              <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
                Rp. 80.000
              </Typography>
            </Grid>
          </Grid>

          {/* List 4 */}
          <Grid container direction={"row"} sx={{ alignItems: "center" }}>
            {/* Icon */}
            <Grid item xs={1} color={Colors.gray} mr={0.2}>
              <img src={BeltIcon} width={24} heigth={24} />
            </Grid>

            {/* Item */}
            <Grid item xs={7}>
              <Typography sx={{ fontSize: 15 }}>Sabuk</Typography>
            </Grid>

            {/* Price */}
            <Grid item textAlign="right" xs mb={1.5}>
              <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
                Rp. 30.000
              </Typography>
            </Grid>
          </Grid>

          <Divider color={Colors.lightGray} />

          <Grid
            container
            direction={"row"}
            sx={{ alignItems: "center", mt: 1 }}
          >
            <Grid item xs={1} mr={0.2}></Grid>

            <Grid item xs={7}>
              <Typography sx={{ fontSize: 16 }}>Total</Typography>
            </Grid>

            <Grid item xs>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                Rp. 260.000
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

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
          <Typography sx={{ fontSize: 17, fontWeight: "bold" }}>
            Biaya Tambahan
          </Typography>

          <FormGroup sx={{ fontSize: 15 }}>
            <FormControlLabel
              control={<Checkbox className={classes.checkbox} />}
              label="Seragam"
              classes={{ label: classes.label }}
            />
            <FormControlLabel
              control={<Checkbox className={classes.checkbox} />}
              label="Sabuk"
              classes={{ label: classes.label }}
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  );
}
