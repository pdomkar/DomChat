import { combineReducers } from 'redux';
import { token } from './token';
import { isAuthenticating } from './isAuthenticating';
import { errors } from './errors';
import { email } from './email';

export const shared = combineReducers({
    token,
    email,
    isAuthenticating,
    errors,
});