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
// Import Theme
import Colors from "../../Theme/Color";
import { useStyles } from "./CardStyles";
// Import Card Data
import DetailCard from "./CardData";

export default function Cards() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* Informasi Biaya */}
      <Card
        sx={{
          width: "100%",
          maxHeight: 210,
          mt: 5,
          borderRadius: 2,
          boxShadow: "0px 0px 6px #a1a1a1",
        }}
      >
        <CardContent className={classes.cardContent}>
          <Typography fontSize={17} fontWeight="bold" gutterBottom>
            Informasi Biaya
          </Typography>

          {/* Detail Biaya */}
          {DetailCard.map((data, index) => (
            <Grid container direction={"row"} alignItems={"center"} key={index}>
              {/* Icon */}
              <Grid item xs={1.2}>
                <img src={data.icon} width={24} heigth={24} />
              </Grid>
              {/* Item */}
              <Grid item xs={6}>
                <Typography fontSize={15}>{data.item}</Typography>
              </Grid>
              <Grid item xs textAlign="right">
                <Typography fontSize={15} fontWeight={"bold"}>
                  Rp.
                </Typography>
              </Grid>
              {/* Price */}
              <Grid item textAlign="right" xs={2.3}>
                <Typography fontSize={15} fontWeight={"bold"}>
                  {data.price}
                </Typography>
              </Grid>
            </Grid>
          ))}

          <Divider color={Colors.lightGray} />

          {/* Total */}
          <Grid container direction={"row"} alignItems={"center"} mt={1}>
            <Grid item xs={1.2}></Grid>
            <Grid item xs={6}>
              <Typography fontSize={16}>Total</Typography>
            </Grid>
            <Grid item xs textAlign="right">
              <Typography
                fontSize={15}
                fontWeight={"bold"}
                sx={{ color: Colors.seaGreen }}
              >
                Rp.
              </Typography>
            </Grid>
            <Grid item textAlign="right" xs={2.3}>
              <Typography
                fontSize={15}
                fontWeight={"bold"}
                sx={{ color: Colors.seaGreen }}
              >
                260000
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
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={checked}
                  onChange={handleChange}
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
                  checked={checked}
                  onChange={handleChange}
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
