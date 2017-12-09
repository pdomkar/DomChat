import {
    dismissStatusMessage,
    failAuthentication,
    invalidateToken
} from './actionCreators';
import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';

export const performAuthorizedRequest = async (dispatch, requestAction) => {
    try {
        return await requestAction();
    }
    catch (error) {
        if (error.statusCode === 401) {
            dispatch(invalidateToken());
            const dispatchedAction = dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }

        throw error;
    }
};