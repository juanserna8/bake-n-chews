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
            const cartItem = {
                name: action.payload.cake.name,
                image: action.payload.cake.image,
                productId: action.payload.cake.id,
                optionId: action.payload.option.id,
                price: action.payload.option.price,
                size: action.payload.option.size,
                people: action.payload.option.people
            }
            state.cart.push(cartItem)
        }
    }
});


export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer