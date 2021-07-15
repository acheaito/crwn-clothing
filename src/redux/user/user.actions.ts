import { CurrentUser } from "../../models/user-interfaces";
import { UserActions } from "./user.types";

export const setCurrentUser = (user?: CurrentUser | null): any => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
});