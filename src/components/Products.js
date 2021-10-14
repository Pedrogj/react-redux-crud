import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
//Mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, Typography } from "@mui/material";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { downloadProductAction } from "../actions/ProductActions";
import { deleteProductAction } from "../actions/ProductActions";

export const Products = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    // consultar la api
    const loadProduct = () => dispatch(downloadProductAction());
    loadProduct();
  }, []);

  // obtener el state
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const load = useSelector((state) => state.products.loading);

  // confirmar eliminar
  const deleteProduct = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // pasarlo al action
        dispatch(deleteProductAction(id));
      }
    });
  };

  // funcion que redirige de forma programada
  const redirectEdit = (product) => {
    history.push(`/product/edit/${product.id}`);
  };

  return (
    <>
      <Grid>
        <Typography variant="h5">Products List</Typography>
        {error ? <Typography component="p">Hubo un error</Typography> : null}
        {load ? <Typography component="p">Loading...</Typography> : null}
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0
              ? "No hay productos"
              : products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell align="left">$ {product.price}</TableCell>
                    <TableCell sx={{ "& > button": { m: 1 } }} align="left">
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={() => redirectEdit(product)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
