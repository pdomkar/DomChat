import { combineReducers } from 'redux';
import { token } from './token';
import { isAuthenticating } from './isAuthenticating';
import { statusMessages } from './statusMessages';
import { email } from './email';
import { users } from './users';
import { isFetchingUsers } from './isFetchingUsers';

export const shared = combineReducers({
    token,
    email,
    users,
    isAuthenticating,
    isFetchingUsers,
    statusMessages,
});