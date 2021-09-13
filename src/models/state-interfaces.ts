import { Action } from "redux";
import { CartItem } from "./cart.interfaces";

import { CurrentUser } from "./user-interfaces";

export interface IState {
    currentUser?: CurrentUser;
    cartHidden?: boolean;
    cartItems?: CartItem[];
}

export interface IReducedState {
    userState?: IState;
    cartState?: IState;
}

export interface IStateAction extends Action<string> {    
    payload?: any;
}