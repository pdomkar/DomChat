import {
    SHARED_RECEIVE_TOKEN,
    SHARED_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_STARTED,
    SHARED_AUTHENTICATION_FAILED,
    SHARED_DISMISS_STATUS_MESSAGE,
    SHARED_RECEIVE_EMAIL,
    SHARED_LOAD_USERS,
    SHARED_USERS_FETCHING_FAILED,
} from '../../constants/actionTypes';
import { statusMessageActionFactory } from '../../utils/statusMessageActionFactory';

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

export const dismissStatusMessage = (statusMessageId) => ({
    type: SHARED_DISMISS_STATUS_MESSAGE,
    payload: {
        statusMessageId,
    }
});

export const failAuthentication = statusMessageActionFactory(SHARED_AUTHENTICATION_FAILED);
export const failFetchingUsers = statusMessageActionFactory(SHARED_USERS_FETCHING_FAILED);

