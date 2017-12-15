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
import { MILISECONDS_TO_AUTO_DISMISS_MESSAGE, FAILED_AUTHENTICATION_MESSAGE } from '../../constants/uiConstants';

export const authenticateUserFactory = ({fetchCreateUser, fetchAuthToken}) => (destinationLocation, login) =>
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

            const itemForSave = {
                [SHARED_TOKEN]: token,
                [SHARED_EMAIL]: login.email,
                [SHARED_TOKEN_TIMESTAMP]: new Date().getTime()
            };
            Object.keys(itemForSave).map(k => localStorage.setItem(k, JSON.stringify(itemForSave[k])));
        } catch(error) {
            console.log(error);
            const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
    };