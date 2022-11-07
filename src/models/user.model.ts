export interface IUser {
    id: number;
    username: string;
    access_token: string;
}

export interface IUserRegistration {
    username: string;
    password: string;
    passconf: string;
}