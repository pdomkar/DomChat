import {
    dismissError,
    receiveValidToken
} from './actionCreators';
import {
    failAuthentication,
    startAuthentication
} from './actionCreators';
import { push } from 'connected-react-router';
import {
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import { USER_EMAIL } from '../../constants/api';
import { MILISECONDS_TO_AUTO_DISMISS_ERROR, FAILED_AUTHENTICATION_MESSAGE } from '../../constants/uiConstants';

export const authenticateUser  = (destinationLocation) =>
    (dispatch) => {
        dispatch(startAuthentication());

        return fetchAuthToken(USER_EMAIL)
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push(destinationLocation));
                localStorage.setItem(SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });

    };