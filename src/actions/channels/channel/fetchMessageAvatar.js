import { performAuthorizedRequest } from '../../profile/performAuthorizedRequest';
import { fetchReceive } from '../../../utils/api/fetchReceive';
import { createApiFilerUri } from '../../../constants/api';
import { failFetchingMessageAvatar } from './actionCreators';
import { FAILED_FETCH_AVATAR_MESSAGE } from '../../../constants/uiConstants';
export const fetchMessageAvatar = (avatarId) =>
    async (dispatch, getState) => {
        // dispatch(startFetchingProfileAvatar());

        const authToken = getState().shared.token;
        const requestUri = createApiFilerUri(avatarId);

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const avatarUri = await fetchReceive(requestUri, authToken);
                dispatch(updateMessageAvatar(avatarUri));
            });
        }
        catch (error) {
            return dispatch(failFetchingMessageAvatar(FAILED_FETCH_AVATAR_MESSAGE, error));
        }
    };