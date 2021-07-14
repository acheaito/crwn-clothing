import { CurrentUser } from "../../models/user-interfaces";
import { ReducerActions } from "../reducer-actions";
import { AnyAction } from 'redux';

interface IState {
    currentUser?: CurrentUser;
}

const INITIAL_STATE: IState = {    
};

const userReducer = (state = INITIAL_STATE, action: AnyAction): IState => {
    switch (action.type) { 
    case ReducerActions.SET_CURRENT_USER:        
        return {
            ...state,
            currentUser: action.payload
        };
    default:
        return state;
    }
};

export default userReducer;