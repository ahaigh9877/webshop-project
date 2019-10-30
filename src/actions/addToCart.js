export const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(product, image, price) {
  const newId = Math.round(Math.random() * 10000);
  return {
    type: ADD_TO_CART,
    payload: {
      id: newId,
      product,
      image,
      price
    }
  };
}
