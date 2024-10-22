//add items
//remove items
//clear the cart
// (keep track of cart items)
import {create} from "zustand"

export type CartItem = {
    
}

type CartState = {
    items: CartItem
}

export const useCart = create()