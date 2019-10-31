import { combineReducers } from 'redux';
import products from './products';
import shoppingCart from './shoppingCart';
import cartTotal from './cartTotal';

export default combineReducers({
    products,
    shoppingCart,
    cartTotal
});
