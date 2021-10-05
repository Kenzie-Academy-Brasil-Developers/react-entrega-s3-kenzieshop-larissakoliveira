import { ADD_CART, REMOVE_CART } from "./actionsTypes";

const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = cartInitialState, action) => {
     
    switch (action.type) {
        case ADD_CART:
            const { product } = action;
            return [...state, product];

        case REMOVE_CART:
            const { product: {id} } = action;
            const filterProd = state.filter((item)=>item.id !== id);
            return filterProd;
            
        default:
            return state;
    }
}

export default cartReducer