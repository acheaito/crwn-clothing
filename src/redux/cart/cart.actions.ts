import { IStateAction } from "../../models/state-interfaces";
import { CartActions } from "./cart.types";

export const toggleCartHidden = (): IStateAction => ({
    type: CartActions.TOGGLE_CART_HIDDEN
});