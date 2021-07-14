import { ReducerActions } from "../reducer-actions";

import { CurrentUser } from "../../models/user-interfaces";

export const setCurrentUser = (user?: CurrentUser | null): any => ({
    type: ReducerActions.SET_CURRENT_USER,
    payload: user
});