import request from 'superagent';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SORT_LOW_TO_HIGH = 'SORT_LOW_TO_HIGH';
export const SORT_HIGH_TO_LOW = 'SORT_HIGH_TO_LOW';
export const SORT_ATOZ = 'SORT_ATOZ';
export const SORT_ZTOA = 'SORT_ZTOA';

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: {
            products
        }
    };
}

export function getProducts() {
    return function(dispatch) {
        request.get('http://localhost:4000/products').end((error, response) => {
            if (!error && response) {
                dispatch(setProducts(response.body));
            }
        });
    };
}

export function sortLowToHigh(products) {
    return {
        type: SORT_LOW_TO_HIGH,
        payload: products
    };
}

export function sortHighToLow(products) {
    return {
        type: SORT_HIGH_TO_LOW,
        payload: products
    };
}

export function sortAToZ(products) {
    return {
        type: SORT_ATOZ,
        payload: products
    };
}

export function sortZToA(products) {
    return {
        type: SORT_ZTOA,
        payload: products
    };
}
