import { AnyAction } from 'redux';
import { IState } from '../../models/state-interfaces';
import { UserActions } from "./user.types";

const userReducer = (state: IState = {}, action: AnyAction): IState => {
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