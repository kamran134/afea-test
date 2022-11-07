import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAuth } from "../../models/auth.model";
import { IUserRegistration } from "../../models/user.model";
import { RootState } from "../reducers";
import { AuthTypes, REGISTER } from "../types";

const _register: ActionCreator<AuthTypes> = (registerResponse: IAuth) => ({
    type: REGISTER,
    payload: registerResponse
});

export const register = (user: IUserRegistration): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    
    const res = await fetch('https://demoblog.afeagroup.com/user/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "PostmanRuntime/7.29.2",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive"
        },
        body: `username=${user.username}&password=${user.password}&passconf=${user.passconf}`,
    });

    const _json = await res.json();
    dispatch(_register(_json));
}