import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormGroup,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Colors from "../Theme/Color";

export default function BasicCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, height: 200 }} elevation={3}>
        <CardContent>
          <Typography sx={{ fontSize: 15, fontWeight: "bold" }} gutterBottom>
            Informasi Biaya
          </Typography>

          <Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Grid item mr={1.5} color={Colors.gray}>
                <InsertDriveFileOutlinedIcon />
              </Grid>
              <Grid item mr={9.5}>
                <Typography sx={{ fontSize: 14 }}>Biaya Pendaftaran</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  Rp. 50.000
                </Typography>
              </Grid>
            </Grid>

            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Grid item mr={1.5} color={Colors.gray}>
                <LocalAtmIcon />
              </Grid>
              <Grid item mr={13}>
                <Typography sx={{ fontSize: 14 }}>Iuran Bulanan</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  Rp. 100.000
                </Typography>
              </Grid>
            </Grid>

            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Grid item mr={1.5} color={Colors.gray}>
                <InsertDriveFileOutlinedIcon />
              </Grid>
              <Grid item mr={16.8}>
                <Typography sx={{ fontSize: 14 }}>Seragam</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  Rp. 80.000
                </Typography>
              </Grid>
            </Grid>

            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Grid item mr={1.5} color={Colors.gray}>
                <InsertDriveFileOutlinedIcon />
              </Grid>
              <Grid item mr={19}>
                <Typography sx={{ fontSize: 14 }}>Sabuk</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  Rp. 30.000
                </Typography>
              </Grid>
            </Grid>

            <Grid item mt={1}>
              <Divider color={"lightgray"} />
            </Grid>

            <Grid item sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Grid item mr={4.5}></Grid>

              <Grid item mr={19}>
                <Typography sx={{ fontSize: 14.5 }}>Total</Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: 14.5, fontWeight: "bold" }}>
                  Rp. 260.000
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, height: 140, mt: 5 }} elevation={3}>
        <CardContent>
          <Typography sx={{ fontSize: 15, fontWeight: "bold" }} gutterBottom>
            Biaya Tambahan
          </Typography>

          <Grid>
            <Grid item>
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
                  label="Seragam"
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
                  label="Sabuk"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
