import { Action } from "redux";
import { ICartItem } from "./cart.interfaces";

import { CurrentUser } from "./user-interfaces";

export interface IState {
    currentUser?: CurrentUser;
    cartHidden?: boolean;
    cartItems?: ICartItem[];
}

export interface IReducedState {
    userState?: IState;
    cartState?: IState;
}

export interface IStateAction extends Action<string> {    
    payload?: any;
}