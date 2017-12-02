import {
    failFetchingUsers,
    updateUsers
} from './actionCreators';

import {
    API_USER_URI,
} from '../../constants/api';
import { invalidateToken, failAuthentication } from './actionCreators';

import { fetchReceive } from '../../utils/api/fetchReceive';

import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_USERS_MESSAGE
} from '../../constants/uiConstants';
import { convertFromServerUsers } from '../../utils/api/conversions/shared';

export const fetchUsers = () =>
    (dispatch, getState) => {
        // dispatch(startFetchingProfileDetails);
        // dispatch(startFetchingProfileAvatar());
        const authToken = getState().shared.token;

        return fetchReceive(API_USER_URI, authToken)
            .then((serverUsers) => dispatch(updateUsers((convertFromServerUsers(serverUsers)))))
            .catch((error) => {
                console.log('err', error);
                if(error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error;
            })
            .catch((error) => dispatch(failFetchingUsers(FAILED_FETCH_USERS_MESSAGE, error)));

    };