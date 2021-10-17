import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/ProductActions";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const dispatch = useDispatch();

  // nuevo state de producto
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  // producto a editar
  const productEdit = useSelector((state) => state.products.productEdit);
  //if (!product) return null;

  // llenar el state automaticamente
  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit]);

  // leer los datos del formulario
  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const { name, price } = product;

  const submitEditProduct = (e) => {
    e.preventDefault();

    dispatch(editProductAction(product));

    history.push("/");
  };

  return (
    <Grid className={classes.display}>
      <Card component="form" onSubmit={submitEditProduct}>
        <CardContent>
          <Grid item className={classes.typography}>
            <Typography variant="h5" component="div">
              Edit Product
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                name="name"
                type="text"
                label="name"
                value={name}
                onChange={onChangeForm}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid} sm={12}>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput
                name="price"
                type="number"
                label="price"
                value={price}
                onChange={onChangeForm}
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
            Save
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
