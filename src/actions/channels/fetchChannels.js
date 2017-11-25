import { API_APP_URI } from '../../constants/api';
import { fetchReceive } from '../../utils/api/fetchReceive';
import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_CHANNELS_MESSAGE
} from '../../constants/uiConstants';
import { failFetchingChannels } from '../profile/actionCreators';
import {
    failAuthentication,
    invalidateToken
} from '../shared/actionCreators';
import { convertFromServerChannels } from '../../utils/api/conversions/channel';
import {
    savingFinished,
    savingStarted,
    updateChannels
} from './actionCreators';

export const fetchChannels = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        const authToken = getState().shared.token;
        fetchReceive(API_APP_URI, authToken)
            .then((serverApp) => dispatch(updateChannels((convertFromServerChannels(serverApp)))))
            .catch((error) => {
                if(error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error;
            })
            .catch((error) => dispatch(failFetchingChannels(FAILED_FETCH_CHANNELS_MESSAGE, error)));
        dispatch(savingFinished());
    };