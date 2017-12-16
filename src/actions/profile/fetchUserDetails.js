import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails,
} from './actionCreators';
import { createApiUserUri } from '../../constants/api';
import {
    FAILED_FETCH_PROFILE_DETAILS_MESSAGE
} from '../../constants/uiConstants';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';

export const fetchUserDetailsFactory = ({ fetchReceive, fetchUserAvatar, convertFromServerDetails }) => () =>
    async (dispatch, getState) => {
        dispatch(startFetchingProfileDetails());
        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(getState().shared.email);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchReceive(requestUri, authToken);
                const clientDetails = convertFromServerDetails(receivedServerDetails);
                dispatch(updateProfileDetails((clientDetails)));
                clientDetails.avatarId ? dispatch(fetchUserAvatar(clientDetails.avatarId)) : dispatch(fetchUserAvatar(''));
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                dispatch(failFetchingProfileDetails(FAILED_FETCH_PROFILE_DETAILS_MESSAGE, error));
            }
        }

    };