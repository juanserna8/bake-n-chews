import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify"
import mapToObject from "../utils/mapToObject";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [],
        //The TotalQuantity will give us the # of products that we have in the cart
        cartTotalQuantity: 0,
        //The TotalAmount refers to the subtotal equivalent to the products in the cart
        cartTotalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            //Check if we already have an item in the cart
            //Current is being used to show the cart without trouble shooting with Redux
            const cart = current(state.cart)
            console.log({cart})
            //Create the auxiliar object that will group productId and optionId, with the aim to manage
            //the cart as an array instead of manage it as an array.
            const auxiliarObject = mapToObject(cart, (item) => item.itemId )

            //Create the id of the new item that came from the payload, by concatenating its cake.id with
            // option.id
            const newItemId = action.payload.cake.id + '-' + action.payload.option.id; 
            
            // Create a boolean variable. alreadyExist will be true if it exists in the auxiliarObject, and false if not
            const alreadyExist = !!auxiliarObject[newItemId]
            if(alreadyExist) {
                auxiliarObject[newItemId] = {
                   ...auxiliarObject[newItemId],
                   cartQuantity:  auxiliarObject[newItemId].cartQuantity +1
                }
                toast.info(`Increased ${action.payload.option.size} ${action.payload.cake.name} cart quantity`, {
                    position: "bottom-left"})
                // Convert the auxiliar object to an array
                state.cart = Object.values(auxiliarObject)
            } else {
                const cartItem = {
                    itemId: newItemId,
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
                    //Toastify notification
                    toast.success(`${action.payload.option.size} ${action.payload.cake.name} added to cart`, {
                        position: "bottom-left"
                    })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        
        // Remove action
        removeFromCart(state, action) {
            const updatedCart = state.cart.filter(
                (item) => item.itemId !== action.payload.itemId
                //This will return those items that are not equal to our action.payload.option.id, 
                // because that action is meant to delete the items. So the new array will return
                //all those items that were not intended to be deleted
                )
                state.cart = updatedCart
                //update local storage
                localStorage.setItem("cartItems", JSON.stringify(state.cart))
                //Message
                toast.error(`${action.payload.size} ${action.payload.name} removed from cart`, {
                    position: "bottom-left"
                })
            },

        // decrease quantity
        decreaseQuantity(state, action) {
            const itemIndex = state.cart.findIndex(
                (item) => item.itemId ===  action.payload.itemId
            );

            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -=1;

                toast.info(`Decreased ${action.payload.size} ${action.payload.name} cart quantity`, {
                    position: "bottom-left"})
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                const nextcartItems = state.cart.filter(
                    (item) => item.itemId !== action.payload.itemId
                )
                state.cart = nextcartItems;
                toast.error(`${action.payload.size} ${action.payload.name} removed from cart`, {
                    position: "bottom-left"
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },

        // Increase quantity
        increaseQuantity(state, action) {
            const itemIndex = state.cart.findIndex(
                (item) => item.itemId ===  action.payload.itemId
            );

            if(state.cart[itemIndex]) {
                state.cart[itemIndex].cartQuantity ++

                toast.info(`Increased ${action.payload.size} ${action.payload.name} cart quantity`, {
                    position: "bottom-left"})
            }
        }
    }
});


export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer