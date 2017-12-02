import { API_APP_URI } from '../../constants/api';
import { fetchReceive } from '../../utils/api/fetchReceive';
import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_CHANNELS_MESSAGE
} from '../../constants/uiConstants';
import {
    failAuthentication,
    invalidateToken
} from '../shared/actionCreators';
import { convertFromServerChannels } from '../../utils/api/conversions/channel';
import {
    failFetchingChannels,
    savingFinished,
    savingStarted,
    updateChannels
} from './actionCreators';

export const fetchChannels = () =>
    async (dispatch, getState) => {
        dispatch(savingStarted());
        const authToken = getState().shared.token;

        try {
            const serverChannels = await fetchReceive(API_APP_URI, authToken);
            dispatch(updateChannels((convertFromServerChannels(serverChannels))));
        } catch(error) {
            if(error.statusCode === 401) {
                dispatch(invalidateToken());
                return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
            }
            dispatch(failFetchingChannels(FAILED_FETCH_CHANNELS_MESSAGE, error));
        } finally {
            dispatch(savingFinished());
        }

    };