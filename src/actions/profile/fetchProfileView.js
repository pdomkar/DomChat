import {
    failFetchingProfileView,
    startFetchingProfileView,
    updateProfileView
} from './actionCreators';
import {
    createApiFilerUri,
    createApiUserUri
} from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    FAILED_FETCH_PROFILE_VIEW_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
import { dismissStatusMessage } from '../shared/actionCreators';
import { fetchReceive } from '../../utils/api/fetchReceive';
import { convertFromServerDetails } from '../../utils/api/conversions/profileDetails';

export const fetchProfileView = (email) =>
    async (dispatch, getState) => {
        dispatch(startFetchingProfileView());
        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(email);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerUser = await fetchReceive(requestUri, authToken);
                const clientUser = convertFromServerDetails(receivedServerUser);
                let avatarUri = '';
                if(clientUser.avatarId) {
                    const requestFileUri = createApiFilerUri(clientUser.avatarId);
                   avatarUri  = await fetchReceive(requestFileUri, authToken);
                }

                delete clientUser.avatarId;

                dispatch(updateProfileView({avatarUri, ...clientUser}));
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failFetchingProfileView(FAILED_FETCH_PROFILE_VIEW_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }
    };