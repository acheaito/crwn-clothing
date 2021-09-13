import { IStateAction } from "../../models/state-interfaces";
import { CurrentUser } from "../../models/user-interfaces";
import { UserActions } from "./user.types";

export const setCurrentUser = (currentUser?: CurrentUser): IStateAction => ({    
    type: UserActions.SET_CURRENT_USER,
    payload: currentUser
});
