import { tsCallSignatureDeclaration } from '@babel/types';

export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';

export function filterProducts(products, categoryId) {
    return {
        type: FILTER_PRODUCTS,
        payload: { products, categoryId }
    };
}

export function filterBySearch(products, searchTerm) {
    console.log('filterBySearch was called');
    return {
        type: FILTER_BY_SEARCH,
        payload: { products, searchTerm }
    };
}
