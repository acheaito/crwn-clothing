import { Action } from "redux";
import { CurrentUser } from "./user-interfaces";

export interface IState {
    currentUser?: CurrentUser;
    cartHidden?: boolean;
}

export interface IReducedState {
    userState?: IState;
    cartState?: IState;
}

export interface IStateAction extends Action<string> {    
    payload?: any;
}