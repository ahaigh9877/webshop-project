import { FILTER_PRODUCTS } from '../actions/filterProducts.js';
import { FILTER_BY_SEARCH } from '../actions/filterProducts.js';
import { RESET_FILTERS } from '../actions/filterProducts.js';
import {
    SORT_LOW_TO_HIGH,
    SORT_HIGH_TO_LOW,
    SORT_ATOZ,
    SORT_ZTOA
} from '../actions/getProducts';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return action.payload.products.filter(
                product => product.categoryId === action.payload.categoryId
            );
        case FILTER_BY_SEARCH:
            return action.payload.products.filter(product => {
                return (
                    product.name
                        .toLowerCase()
                        .includes(action.payload.searchTerm.toLowerCase()) ||
                    product.description
                        .toLowerCase()
                        .includes(action.payload.searchTerm.toLowerCase())
                );
            });
        case RESET_FILTERS:
            return action.payload;
        case SORT_LOW_TO_HIGH:
            let sortedLow = action.payload.slice();
            return sortedLow.sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price);
            });
        case SORT_HIGH_TO_LOW:
            let sortedHigh = action.payload.slice();
            return sortedHigh.sort((a, b) => {
                return parseInt(b.price) - parseInt(a.price);
            });
        case SORT_ATOZ:
            let sortedAToZ = action.payload.slice();
            return sortedAToZ.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        case SORT_ZTOA:
            let sortedZToA = action.payload.slice();
            return sortedZToA.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        default:
            return state;
    }
};
export default reducer;
