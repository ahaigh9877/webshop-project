import { combineReducers } from 'redux';
import products from './products';
import shoppingCart from './shoppingCart';

export default combineReducers({
    products,
    shoppingCart
});
