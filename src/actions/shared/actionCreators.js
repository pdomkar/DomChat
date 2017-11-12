import {
    SHARED_RECEIVE_TOKEN,
    SHARED_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_STARTED,
    SHARED_AUTHENTICATION_FAILED,
    SHARED_DISMISS_ERROR
} from '../../constants/actionTypes';
import { uuid } from '../../utils/uuidGenerator';

export const receiveValidToken = () => ({
    type: SHARED_RECEIVE_TOKEN,
    payload: {
        token: 'forged-token-much-guid-such-wow',
    }
});

export const invalidateToken = () => ({
    type: SHARED_INVALIDATE_TOKEN,
});

export const startAuthentication = () => ({
    type: SHARED_AUTHENTICATION_STARTED,
});

export const failAuthentication = (errorMessage, error) => ({
    type: SHARED_AUTHENTICATION_FAILED,
    payload: {
        error: {
            id: uuid(),
            message: errorMessage,
            statusText: error.message,
            statusCode: error.statusCode,
        }
    }
});

export const dismissError = (errorId) => ({
    type: SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});
