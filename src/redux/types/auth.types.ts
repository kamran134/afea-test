import { IAuth } from "../../models/auth.model";

export const REGISTER = "REGISTER";
export interface IRegisterAction {
    type: typeof REGISTER;
    payload: IAuth
}

export type AuthTypes = IRegisterAction;