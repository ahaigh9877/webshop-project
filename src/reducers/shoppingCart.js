import {
    ADD_TO_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY
} from '../actions/addToCart';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return [...state, { ...action.payload }];
        }
        case INCREMENT_QUANTITY: {
            return state.map(product => {
                if (product.productId === action.payload) {
                    product.quantity = product.quantity + 1;
                }
                return product;
            });
        }
        case DECREMENT_QUANTITY: {
            return state.map(product => {
                if (product.productId === action.payload) {
                    if (product.quantity > 1) {
                        product.quantity = product.quantity - 1;
                    }
                }
                return product;
            });
        }
        default: {
            return state;
        }
    }
};
