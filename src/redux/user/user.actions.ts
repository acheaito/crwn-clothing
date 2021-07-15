import { CurrentUser } from "../../models/user-interfaces";
import { UserActions } from "./user.types";

export const setCurrentUser = (currentUser?: CurrentUser | null): any => ({
    type: UserActions.SET_CURRENT_USER,
    payload: currentUser
});
