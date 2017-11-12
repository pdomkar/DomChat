import {
    SHARED_RECEIVE_TOKEN,
    SHARED_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_STARTED,
    SHARED_AUTHENTICATION_FAILED,
    SHARED_DISMISS_ERROR
} from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

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

export const failAuthentication = errorActionFactory(SHARED_AUTHENTICATION_FAILED);

export const dismissError = (errorId) => ({
    type: SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});
