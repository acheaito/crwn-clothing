import { CartItem } from "../../models/cart.interfaces";

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if(existingCartItem) {
        return cartItems.map(item => (item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};