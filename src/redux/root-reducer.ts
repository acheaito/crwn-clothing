import { AnyAction, combineReducers, ReducersMapObject } from "redux";
import { CurrentUser } from "../models/user-interfaces";

import userReducer from "./user/user.reducer";

export interface IState {
    currentUser?: CurrentUser;
}

export interface IReducedState {
    userState?: IState;
}

const reducerMap: ReducersMapObject<IReducedState, AnyAction> = {
    userState: userReducer
};

export default combineReducers<IReducedState, AnyAction>(reducerMap);