import { CollItem } from "../../models/collection-interfaces";
import { IStateAction } from "../../models/state-interfaces";
import { CartActions } from "./cart.types";

export const toggleCartHidden = (): IStateAction => ({
    type: CartActions.TOGGLE_CART_HIDDEN
});

export const addItem = (item: CollItem): IStateAction => ({
    type: CartActions.ADD_ITEM,
    payload: item
});