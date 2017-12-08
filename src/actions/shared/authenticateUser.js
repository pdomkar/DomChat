import {
    dismissStatusMessage,
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
import { MILISECONDS_TO_AUTO_DISMISS_MESSAGE, FAILED_AUTHENTICATION_MESSAGE } from '../../constants/uiConstants';
import { fetchCreateUser } from '../../utils/api/fetchCreateUser';

export const authenticateUser  = (destinationLocation, login) =>
    async (dispatch) => {
        dispatch(startAuthentication());

        let createdServerUser;
        try {
            createdServerUser = await fetchCreateUser(login.email);
        } catch(error) {
            // exist user - so authenticate him next
        }

        try {
            const email = (createdServerUser && createdServerUser.email) || login.email;
            const token = await fetchAuthToken(email);
            dispatch(receiveValidEmail(email));
            dispatch(receiveValidToken(token));
            dispatch(push(destinationLocation));
            localStorage.setItem(SHARED_TOKEN, JSON.stringify(token));
            localStorage.setItem(SHARED_EMAIL, JSON.stringify(login.email));
            localStorage.setItem(SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
        } catch(error) {
            const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
    };