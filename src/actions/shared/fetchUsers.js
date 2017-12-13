import {
    dismissStatusMessage,
    failFetchingUsers,
    startFetchingUsers,
    updateUsers
} from './actionCreators';

import { API_USER_URI } from '../../constants/api';
import {
    FAILED_FETCH_USERS_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
import { convertFromServerUsers } from '../../utils/api/conversions/shared';
import { performAuthorizedRequest } from './performAuthorizedRequest';

export const fetchUsersFactory = (fetchReceive) => () =>
    async (dispatch, getState) => {
        dispatch(startFetchingUsers());
        const authToken = getState().shared.token;

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerUsers = await fetchReceive(API_USER_URI, authToken);
                const clientUsers = convertFromServerUsers(receivedServerUsers);
                dispatch(updateUsers((clientUsers)));
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failFetchingUsers(FAILED_FETCH_USERS_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }
    };