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

// cada reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_CHEK:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case DOWNLOAD_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
    case PRODUCT_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_CHEK:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload,
      };
    case PRODUCT_DELETE_CHEK:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };
    default:
      return state;
  }
}
