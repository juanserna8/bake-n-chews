import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: [],
        //The TotalQuantity will give us the # of products that we have in the cart
        cartTotalQuantity: 0,
        //The TotalAmount refers to the subtotal equivalent to the products in the cart
        cartTotalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            //Check if we already have an item in the cart
            const optionIndex = state.cart.findIndex(
                (item) => item.optionId === action.payload.option.id
            );
            if(optionIndex >= 0){
                state.cart[optionIndex].cartQuantity += 1
            } else {
                const cartItem = {
                name: action.payload.cake.name,
                image: action.payload.cake.image,
                productId: action.payload.cake.id,
                optionId: action.payload.option.id,
                price: action.payload.option.price,
                size: action.payload.option.size,
                people: action.payload.option.people,
                cartQuantity: 1
            }
            state.cart.push(cartItem)
            }   
        }
    }
});


export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer