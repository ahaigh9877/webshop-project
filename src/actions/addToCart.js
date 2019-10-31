export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';

export function addToCart(product, image, price, productId) {
    return function(dispatch, getState) {
        const cart = getState().shoppingCart;
        // console.log("cart: ", cart);
        // check if this product is already in the cart??
        const productToIncrement = cart.find(function(cartProduct) {
            // console.log("cartProduct: ", cartProduct);
            return cartProduct.productId === productId;
        });

        console.log('productToIncrement: ', productToIncrement);

        if (productToIncrement) {
            dispatch({
                type: INCREMENT_QUANTITY,
                payload: productToIncrement.productId
            });
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
