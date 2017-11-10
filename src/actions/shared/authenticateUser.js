import { receiveValidToken } from './actionCreators';
import { push } from 'connected-react-router';
import {
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../../constants/localStorageKeys';

export const authenticateUser  = (destinationLocation) =>
    (dispatch, getState) => {
        dispatch(receiveValidToken());
        localStorage.setItem(SHARED_TOKEN, JSON.stringify(getState().shared.token));
        localStorage.setItem(SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
        dispatch(push(destinationLocation));
    };