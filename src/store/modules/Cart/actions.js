import { ADD_CART, REMOVE_CART } from "./actionsTypes";

export const addToCart = (product) => ({
    type: ADD_CART,
    product,
})

export const removeFromCart = (product) => ({
    type: REMOVE_CART,
    product,
})