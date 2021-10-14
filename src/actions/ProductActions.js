import {
  ADD_PRODUCT,
  ADD_PRODUCT_CHEK,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_CHEK,
  DOWNLOAD_PRODUCTS_ERROR,
  PRODUCT_DELETE,
  PRODUCT_DELETE_CHEK,
  PRODUCT_DELETE_ERROR,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Create New Products
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // insertar en la API
      await clientAxios.post("/products", product);
      //si todo sale bien actualizar el state
      dispatch(addProductChek(product));
      //Alerta
      Swal.fire("Chek", "this product add succesfully", "success");
    } catch (error) {
      console.log(error);
      // si hay un error cambiar el state
      dispatch(addProductError(true));
      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

// si el producto de guarda en la base de datos
const addProductChek = (product) => ({
  type: ADD_PRODUCT_CHEK,
  payload: product,
});

//si hubo un error
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

// funcion que descarga los productos de la base de datos
export function downloadProductAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const res = await clientAxios.get("/products");
      dispatch(downloadProductExito(res.data));
      //console.log(res.data);
    } catch (error) {
      //console.log(error);
      dispatch(downloadProductError());
    }
  };
}

const downloadProducts = () => ({
  type: DOWNLOAD_PRODUCTS,
  payload: true,
});

const downloadProductExito = (products) => ({
  type: DOWNLOAD_PRODUCTS_CHEK,
  payload: products,
});

const downloadProductError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

//Selecciona y elimina el producto
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(productDelete(id));
    //console.log(id);

    try {
      await clientAxios.delete(`/products/${id}`);
      dispatch(deleteProductChek());
      // si se elimina mostrar alerta
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {}
  };
}

const productDelete = (id) => ({
  type: PRODUCT_DELETE,
  payload: id,
});

const deleteProductChek = () => ({
  type: PRODUCT_DELETE_CHEK,
});

const deleteProductError = {
  type: PRODUCT_DELETE_ERROR,
  payload: true,
};
