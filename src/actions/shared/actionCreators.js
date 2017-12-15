import {
    SHARED_RECEIVE_TOKEN,
    SHARED_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_STARTED,
    SHARED_AUTHENTICATION_FAILED,
    SHARED_DISMISS_STATUS_MESSAGE,
    SHARED_RECEIVE_EMAIL,
    SHARED_LOAD_USERS,
    SHARED_USERS_FETCHING_FAILED,
    SHARED_USERS_FETCHING_STARTED,
} from '../../constants/actionTypes';
import { statusMessageAction } from '../statusMessageActionFactory';

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

export const startFetchingUsers = () => ({
    type: SHARED_USERS_FETCHING_STARTED
});

export const dismissStatusMessage = (statusMessageId) => ({
    type: SHARED_DISMISS_STATUS_MESSAGE,
    payload: {
        statusMessageId,
    }
});

export const failAuthentication = statusMessageAction(SHARED_AUTHENTICATION_FAILED);
export const failFetchingUsers = statusMessageAction(SHARED_USERS_FETCHING_FAILED);

