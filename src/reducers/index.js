import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  products: ProductsReducer,
  alert: alertReducer,
});
