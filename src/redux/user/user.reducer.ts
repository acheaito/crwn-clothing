import { CurrentUser } from "../../models/user-interfaces";
import { AnyAction } from 'redux';
import { UserActions } from "./user.types";

interface IState {
    currentUser?: CurrentUser;
}

const INITIAL_STATE: IState = {    
};

const userReducer = (state = INITIAL_STATE, action: AnyAction): IState => {
    switch (action.type) { 
    case UserActions.SET_CURRENT_USER:        
        return {
            ...state,
            currentUser: action.payload
        };
    default:
        return state;
    }
};

export default userReducer;