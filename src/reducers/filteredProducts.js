import { FILTER_PRODUCTS } from '../actions/filterProducts.js';
import { FILTER_BY_SEARCH } from '../actions/filterProducts.js';
import { RESET_FILTERS } from '../actions/filterProducts.js';

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
        default:
            return state;
    }
};
export default reducer;
