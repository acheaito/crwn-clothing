import { Action } from "redux";
import { CurrentUser } from "./user-interfaces";

export interface IState {
    currentUser?: CurrentUser;
}

export interface IReducedState {
    userState?: IState;
}

export interface IStateAction extends Action<string> {    
    payload: any;
}