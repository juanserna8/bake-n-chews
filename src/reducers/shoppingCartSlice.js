import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        }
    }
});


export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer