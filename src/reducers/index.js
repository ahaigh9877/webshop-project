import { combineReducers } from 'redux';
import products from './products';
import shoppingCart from './shoppingCart';
import filteredProducts from './filteredProducts';

export default combineReducers({
    products,
    shoppingCart,
    filteredProducts
});
