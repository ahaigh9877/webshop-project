const reducer = (state = [], action = {}) => {
    console.log('Products reducer : ', action.payload);
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.payload.products;
        default:
            return state;
    }
};
export default reducer;
