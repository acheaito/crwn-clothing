import { AnyAction, combineReducers, ReducersMapObject } from "redux";
import { IReducedState } from "../models/state-interfaces";

import userReducer from "./user/user.reducer";

const reducerMap: ReducersMapObject<IReducedState, AnyAction> = {
    userState: userReducer
};

export default combineReducers<IReducedState, AnyAction>(reducerMap);