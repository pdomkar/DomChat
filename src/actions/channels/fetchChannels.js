import { API_APP_URI } from '../../constants/api';
import { fetchReceive } from '../../utils/api/fetchReceive';
import {
    FAILED_FETCH_CHANNELS_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
import { dismissStatusMessage } from '../shared/actionCreators';
import { convertFromServerChannels } from '../../utils/api/conversions/channel';
import {
    failFetchingChannels,
    savingFinished,
    savingStarted,
    updateChannels
} from './actionCreators';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';

export const fetchChannels = () =>
    async (dispatch, getState) => {
        dispatch(savingStarted());
        const authToken = getState().shared.token;

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const serverChannels = await fetchReceive(API_APP_URI, authToken);
                dispatch(updateChannels((convertFromServerChannels(serverChannels))));
            });
        } catch(error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failFetchingChannels(FAILED_FETCH_CHANNELS_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        } finally {
            dispatch(savingFinished());
        }

    };