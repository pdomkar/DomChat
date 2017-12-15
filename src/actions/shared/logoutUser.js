import { invalidateToken } from './actionCreators';
import {
    SHARED_EMAIL,
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../../constants/localStorageKeys';

export const logoutUserFactory = (removeItemToStorage) => () =>
    (dispatch) => {
        const itemForRemove = [
            SHARED_TOKEN,
            SHARED_EMAIL,
            SHARED_TOKEN_TIMESTAMP
        ];
        itemForRemove.map(v => removeItemToStorage(v));
        dispatch(invalidateToken());
    };