import * as React from "react";
import { useState } from "react";
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
// Import Theme & Styles
import Colors from "../../Theme/Color";
import { useStyles, cardStyles, fontTitle, fontSize } from "./Styles";
// Import Data
import { BiayaIuran, Seragam, Sabuk } from "./Data";

export default function Cards() {
  const classes = useStyles();
  // State Checkbox Optional Cost
  const [seragam, setSeragam] = useState(false);
  const handleChangeSeragam = () => {
    setSeragam(!seragam);
  };
  const [sabuk, setSabuk] = useState(false);
  const handleChangeSabuk = () => {
    setSabuk(!sabuk);
  };
  // Total Cost
  const totalbiayaIuran = BiayaIuran.reduce(
    (total, currentItem) => (total = total + currentItem.price),
    0
  );
  const totalseragam = Seragam.reduce(
    (total, currentItem) => (total = total + currentItem.price),
    0
  );
  const totalsabuk = Sabuk.reduce(
    (total, currentItem) => (total = total + currentItem.price),
    0
  );
  const total = totalbiayaIuran + totalseragam + totalsabuk;

  return (
    <>
      <Card sx={cardStyles} maxHeight={215}>
        <CardContent className={classes.cardContent}>
          <Typography sx={fontTitle} gutterBottom>
            Informasi Biaya
          </Typography>

          {/* Mandatory Cost  */}
          {BiayaIuran.map((biayaIuran) => (
            <Grid container className={classes.grid}>
              {/* Icon */}
              <Grid item xs={1.2}>
                <img src={biayaIuran.icon} className={classes.iconSize} />
              </Grid>
              {/* Item */}
              <Grid item xs={6}>
                <Typography sx={fontSize}>{biayaIuran.item}</Typography>
              </Grid>
              {/* Rp. */}
              <Grid item xs textAlign="right">
                <Typography sx={fontSize} fontWeight={"bold"}>
                  Rp.
                </Typography>
              </Grid>
              {/* Price */}
              <Grid item textAlign="right" xs={2.3}>
                <Typography sx={fontSize} fontWeight={"bold"}>
                  {biayaIuran.price}
                </Typography>
              </Grid>
            </Grid>
          ))}
          {/* Optional Cost: Seragam */}
          {seragam &&
            Seragam.map((seragam) => (
              <Grid container className={classes.grid}>
                {/* Icon */}
                <Grid item xs={1.2}>
                  <img src={seragam.icon} className={classes.iconSize} />
                </Grid>
                {/* Item */}
                <Grid item xs={6}>
                  <Typography sx={fontSize}>{seragam.item}</Typography>
                </Grid>
                {/* Rp */}
                <Grid item xs textAlign="right">
                  <Typography sx={fontSize} fontWeight={"bold"}>
                    Rp.
                  </Typography>
                </Grid>
                {/* Price */}
                <Grid item textAlign="right" xs={2.3}>
                  <Typography sx={fontSize} fontWeight={"bold"}>
                    {seragam.price}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          {/* Optional Cost: Sabuk */}
          {sabuk &&
            Sabuk.map((sabuk) => (
              <Grid container className={classes.grid}>
                {/* Icon */}
                <Grid item xs={1.2}>
                  <img src={sabuk.icon} className={classes.iconSize} />
                </Grid>
                {/* Item */}
                <Grid item xs={6}>
                  <Typography sx={fontSize}>{sabuk.item}</Typography>
                </Grid>
                {/* Rp. */}
                <Grid item xs textAlign="right">
                  <Typography sx={fontSize} fontWeight={"bold"}>
                    Rp.
                  </Typography>
                </Grid>
                {/* Price */}
                <Grid item textAlign="right" xs={2.3}>
                  <Typography sx={fontSize} fontWeight={"bold"}>
                    {sabuk.price}
                  </Typography>
                </Grid>
              </Grid>
            ))}

          <Divider color={Colors.lightGray} />

          {/* Total */}
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            sx={{ color: Colors.seaGreen, mt: 1 }}
          >
            <Grid item xs={1.2}></Grid>
            <Grid item xs={6}>
              <Typography fontSize={16} fontWeight={"bold"}>
                Total
              </Typography>
            </Grid>
            <Grid item xs textAlign="right">
              <Typography sx={fontSize} fontWeight={"bold"}>
                Rp.
              </Typography>
            </Grid>
            <Grid item textAlign="right" xs={2.3}>
              <Typography sx={fontSize} fontWeight={"bold"}>
                {total}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Optional Cost Card*/}
      <Card sx={cardStyles} height={140}>
        <CardContent>
          <Typography sx={fontTitle}>Biaya Tambahan</Typography>

          <FormGroup>
            {/* Checkbox Seragam */}
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.checkbox}
                  onChange={handleChangeSeragam}
                />
              }
              label="Seragam"
              classes={{ label: classes.labelCheckbox }}
            />
            {/* Checkbox Sabuk */}
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.checkbox}
                  onChange={handleChangeSabuk}
                />
              }
              label="Sabuk"
              classes={{ label: classes.labelCheckbox }}
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  );
}
