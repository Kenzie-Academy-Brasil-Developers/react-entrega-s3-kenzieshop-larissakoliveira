import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const foundedProduct = cart.find((item) => item.id === product.id);

  if (foundedProduct === undefined) {
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch(addToCart(product));
  } 
};

export const removeFromCartThunk = (product) => (dispatch) => {

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsFiltered = cartItems.filter((item) => item.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(cartItemsFiltered));

  if (cartItemsFiltered.length === 0) {
    localStorage.removeItem("cart");
  }

  dispatch(removeFromCart(product));
};