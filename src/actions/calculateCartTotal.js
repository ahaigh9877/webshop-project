export const CALCULATE_TOTAL = 'CALCULATE_TOTAL';

export function calculateTotal(products) {
    const payload = products.reduce(
        (acc, currentValue) => {
            acc.totalQuantity += currentValue.quantity;
            acc.totalCost += currentValue.quantity * currentValue.price;
            return acc;
        },
        {
            totalQuantity: 0,
            totalCost: 0
        }
    );
    return {
        type: CALCULATE_TOTAL,
        payload: payload
    };
}
