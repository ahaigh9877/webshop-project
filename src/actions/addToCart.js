export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export function addToCart(product, image, price, productId) {
    return function(dispatch, getState) {
        const cart = getState().shoppingCart;
        const productToIncrement = cart.find(function(cartProduct) {
            return cartProduct.productId === productId;
        });
        if (productToIncrement) {
            dispatch(incrementQuantity(productToIncrement.productId));
        } else {
            dispatch(addNewProductToCart(product, image, price, productId));
        }
    };
}

export function addNewProductToCart(product, image, price, productId) {
    return {
        type: ADD_TO_CART,
        payload: {
            productId,
            product,
            image,
            price,
            quantity: 1
        }
    };
}

export function incrementQuantity(productId) {
    return {
        type: INCREMENT_QUANTITY,
        payload: productId
    };
}

export function decrementQuantity(productId) {
    return {
        type: DECREMENT_QUANTITY,
        payload: productId
    };
}
