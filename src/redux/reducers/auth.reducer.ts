import { IAuthState } from '../states';
import { AuthTypes, REGISTER } from '../types';

const INITIAL_STATE: IAuthState = {
    accessToken: localStorage.getItem('auth.token') || ''
}

export function authReducer(state = INITIAL_STATE, action: AuthTypes) {
    switch(action.type) {
        case REGISTER:
            return {...state, accessToken: action.payload.user.access_token}
        default:
            return state;
    }
}