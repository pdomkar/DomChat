import {
    startFetchingProfileAvatar,
    failFetchingProfileAvatar,
    updateProfileAvatar
} from './actionCreators';
import { createApiFilerUri } from '../../constants/api';
import { FAILED_FETCH_AVATAR_MESSAGE } from '../../constants/uiConstants';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';

export const fetchUserAvatarFactory = (fetchReceive) => (avatarId) =>
    async (dispatch, getState) => {
        dispatch(startFetchingProfileAvatar());

        const authToken = getState().shared.token;
        const requestUri = createApiFilerUri(avatarId);

        try {
            if(avatarId === '') {
                dispatch(updateProfileAvatar(''));
            } else {
                return await performAuthorizedRequest(dispatch, async () => {
                    const avatarUri = await fetchReceive(requestUri, authToken);
                    dispatch(updateProfileAvatar(avatarUri));
                });
            }
        }
        catch (error) {
            if (error.statusCode !== 401) {
                dispatch(updateProfileAvatar(''));
                dispatch(failFetchingProfileAvatar(FAILED_FETCH_AVATAR_MESSAGE, error));
            }
        }
    };