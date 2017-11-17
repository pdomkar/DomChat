import {
    dismissError,
    receiveValidEmail,
    receiveValidToken
} from './actionCreators';
import {
    failAuthentication,
    startAuthentication
} from './actionCreators';
import { push } from 'connected-react-router';
import {
    SHARED_EMAIL,
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import {
    createApiUserUri,
    USER_EMAIL
} from '../../constants/api';
import { MILISECONDS_TO_AUTO_DISMISS_ERROR, FAILED_AUTHENTICATION_MESSAGE } from '../../constants/uiConstants';
import { fetchCreateUser } from '../../utils/api/fetchCreateUser';

export const authenticateUser  = (destinationLocation, login) =>
    (dispatch) => {
        dispatch(startAuthentication());
        console.log('email',login);

        return fetchCreateUser(login.email)
            .then((data) => {
                console.log("ok", data);
                return fetchAuthToken(data.email)
                    .then((token) => {
                        dispatch(receiveValidEmail(data.email));
                        dispatch(receiveValidToken(token));
                        dispatch(push(destinationLocation));
                        localStorage.setItem(SHARED_TOKEN, JSON.stringify(token));
                        localStorage.setItem(SHARED_EMAIL, JSON.stringify(data.email));
                        localStorage.setItem(SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
                    })
                    .catch((error) => {
                        const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                        setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
                    });
            })
            .catch((error) => {
                console.log(error);
                return fetchAuthToken(login.email)
                    .then((token) => {
                        dispatch(receiveValidEmail(login.email));
                        dispatch(receiveValidToken(token));
                        dispatch(push(destinationLocation));
                        localStorage.setItem(SHARED_TOKEN, JSON.stringify(token));
                        localStorage.setItem(SHARED_EMAIL, JSON.stringify(login.email));
                        localStorage.setItem(SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
                    })
                    .catch((error) => {
                        const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                        setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
                    });
        });

    };