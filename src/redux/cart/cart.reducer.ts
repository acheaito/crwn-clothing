import { ICartItem } from "../../models/cart.interfaces";
import { IState, IStateAction } from "../../models/state-interfaces";
import { CartActions } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE: IState = {
    cartHidden: true,
    cartItems: []
};

const cartReducer = (state: IState = INITIAL_STATE, action: IStateAction): IState => {
    switch(action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            cartHidden: !state.cartHidden
        };
    case CartActions.ADD_ITEM:
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems as ICartItem[], action.payload)
        };
    default:
        return state;        
    }
};

export default cartReducer;