import { API_APP_URI } from '../../../constants/api';
import { performAuthorizedRequest } from '../../profile/performAuthorizedRequest';
import {
    savingFinished,
    savingStarted,
    updateChannel
} from './actionCreators';
import {
    convertFromServerChannelUpdate,
    convertToServerChannelUpdate
} from '../../../utils/api/conversions/channel';
import { fetchPatch } from '../../../utils/api/fetchPatch';
import { dismissError } from '../../shared/actionCreators';
import {
    FAILED_UPDATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../../constants/uiConstants';
import { failUploadingChannel } from '../../profile/actionCreators';
import { fetchChannels } from './fetchChannels';


export const uploadUpdatedChannel  = (channel) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        dispatch(savingStarted());
        console.log('email',channel);
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelUpdate(channel);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerChannel = await fetchPatch(API_APP_URI, authToken, serverChannel);
                console.log(receivedServerChannel);
                const insertedChannel = convertFromServerChannelUpdate(receivedServerChannel, channel.id);
                console.log(insertedChannel);
                dispatch(updateChannel(insertedChannel));
                dispatch(fetchChannels());
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUploadingChannel(FAILED_UPDATE_CHANNEL_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
        dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };