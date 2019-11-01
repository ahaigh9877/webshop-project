import {
    SET_PRODUCTS,
    SORT_LOW_TO_HIGH,
    SORT_HIGH_TO_LOW,
    SORT_ATOZ,
    SORT_ZTOA
} from '../actions/getProducts';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload.products;
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
