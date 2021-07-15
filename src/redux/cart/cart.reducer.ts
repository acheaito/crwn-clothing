import { IState, IStateAction } from "../../models/state-interfaces";
import { CartActions } from "./cart.types";

const INITIAL_STATE: IState = {
    cartHidden: true
};

const cartReducer = (state: IState = INITIAL_STATE, action: IStateAction): IState => {
    switch(action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            cartHidden: !state.cartHidden
        };
    default:
        return state;        
    }
};

export default cartReducer;