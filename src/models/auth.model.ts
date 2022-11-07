import { IUser } from "./user.model";

export interface IAuth {
    status: boolean;
    user: IUser;
    errors?: string[];
}