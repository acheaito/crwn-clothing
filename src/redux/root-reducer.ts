import { AnyAction, combineReducers, ReducersMapObject } from "redux";
import { IReducedState } from "../models/state-interfaces";
import cartReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";

const reducerMap: ReducersMapObject<IReducedState, AnyAction> = {
    userState: userReducer,
    cartState: cartReducer
};

export default combineReducers<IReducedState, AnyAction>(reducerMap);