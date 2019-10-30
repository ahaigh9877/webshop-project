import { combineReducers } from "redux";
import products from "./products";
import shoppingCart from "./shopping-cart";
export default combineReducers({
  products,
  shoppingCart
});
