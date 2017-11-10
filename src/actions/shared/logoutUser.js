import { invalidateToken } from './actionCreators';
import {
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../../constants/localStorageKeys';

export const logoutUser  = () =>
    (dispatch) => {
        localStorage.removeItem(SHARED_TOKEN);
        localStorage.removeItem(SHARED_TOKEN_TIMESTAMP);
        dispatch(invalidateToken());
    };