const reducer = (state = [], action = {}) => {
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
