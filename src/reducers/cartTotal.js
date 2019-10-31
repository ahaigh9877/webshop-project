const reducer = (state = [], action = {}) => {
    console.log('Cart total: ', action.payload);
    switch (action.type) {
        case 'CALCULATE_TOTAL':
            return {
                quantity: action.payload.totalQuantity,
                total: action.payload.totalCost
            };
        default:
            return state;
    }
};
export default reducer;
