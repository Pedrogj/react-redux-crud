import { ADD_PRODUCT, ADD_PRODUCT_CHEK, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";

// Create New Products
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // insertar en la API
      await clientAxios.post("/products", product);
      //si todo sale bien actualizar el state
      dispatch(addProductChek(product));
    } catch (error) {
      console.log(error);
      // si hay un error cambiar el state
      dispatch(addProductError(true));
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
