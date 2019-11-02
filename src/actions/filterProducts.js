export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';
export const RESET_FILTERS = 'RESET_FILTERS';

export function filterProducts(products, categoryId) {
    return {
        type: FILTER_PRODUCTS,
        payload: { products, categoryId }
    };
}

export function filterBySearch(products, searchTerm) {
    return {
        type: FILTER_BY_SEARCH,
        payload: { products, searchTerm }
    };
}

export function resetFilters() {
    return {
        type: RESET_FILTERS,
        payload: []
    };
}
