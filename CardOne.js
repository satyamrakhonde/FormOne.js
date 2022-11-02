import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import { Divider } from "@mui/material";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard() {

  return (
    <Card
      sx={{
        minWidth: 200,
        color: "blue",
        paddingTop: 4,
        marginTop: 4,
        marginRight: 20,
        marginLeft: 20,
      }}
      raised
    >
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <LoginForm />
          </Grid>
          
          <Divider orientation="vertical" flexItem />

          <Grid item xs={5}>
            <SignUpForm />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
