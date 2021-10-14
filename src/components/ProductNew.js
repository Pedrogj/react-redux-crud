import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
// Actions Redux
import { createNewProductAction } from "../actions/ProductActions";

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

export const ProductNew = ({ history }) => {
  const classes = useStyles();
  // state del componente
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  // acceder al state del store
  const load = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // mandar llamar el action de ProductActions
  const addProduct = (product) => dispatch(createNewProductAction(product));

  // cuando el usuario haga submit
  const submitNewProduct = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === "" || price <= 0) {
      return;
    }

    // si no hay error

    // crear el nuevo producto
    addProduct({ name, price });

    // redireccionanr
    history.push("/");
  };

  return (
    <Grid className={classes.display}>
      <Card component="form" onSubmit={submitNewProduct}>
        <CardContent>
          <Grid item className={classes.typography}>
            <Typography variant="h5" component="div">
              Add New Product
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput
                type="number"
                label="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </FormControl>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Add Product
          </Button>
        </CardActions>
        {load ? (
          <Typography variant="h6" component="div">
            loading...
          </Typography>
        ) : null}
        {error ? (
          <Typography variant="h6" component="div">
            Hubo un error
          </Typography>
        ) : null}
      </Card>
    </Grid>
  );
};
