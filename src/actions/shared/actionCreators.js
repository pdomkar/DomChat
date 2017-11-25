import {
    SHARED_RECEIVE_TOKEN,
    SHARED_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_STARTED,
    SHARED_AUTHENTICATION_FAILED,
    SHARED_DISMISS_ERROR,
    SHARED_RECEIVE_EMAIL,
    SHARED_LOAD_USERS,
    SHARED_USERS_FETCHING_FAILED,
} from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const receiveValidEmail = (email) => ({
    type: SHARED_RECEIVE_EMAIL,
    payload: {
        email
    }
});

export const receiveValidToken = (token) => ({
    type: SHARED_RECEIVE_TOKEN,
    payload: {
        token
    }
});

export const invalidateToken = () => ({
    type: SHARED_INVALIDATE_TOKEN,
});

export const startAuthentication = () => ({
    type: SHARED_AUTHENTICATION_STARTED,
});

export const updateUsers = (users) => ({
    type: SHARED_LOAD_USERS,
    payload: {
        users
    }
});

export const failAuthentication = errorActionFactory(SHARED_AUTHENTICATION_FAILED);
export const failFetchingUsers = errorActionFactory(SHARED_USERS_FETCHING_FAILED);

export const dismissError = (errorId) => ({
    type: SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});
