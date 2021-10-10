import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  grid: {
    marginTop: "15px",
  },
  display: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "25px",
  },
  typography: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "15px",
  },
});

export const EditProduct = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.display}>
      <Card>
        <CardContent>
          <Grid item className={classes.typography}>
            <Typography variant="h5" component="div">
              Edit Product
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput id="name" type="text" label="Name" />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput id="price" type="number" label="Price" />
            </FormControl>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" color="primary" size="medium">
            Save
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
