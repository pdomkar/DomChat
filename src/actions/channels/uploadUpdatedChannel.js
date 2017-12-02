import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    failUploadingChannel,
    savingFinished,
    savingStarted,
    updateChannel
} from './actionCreators';
import {
    convertFromServerChannelUpdate,
    convertToServerChannelUpdate
} from '../../utils/api/conversions/channel';
import { fetchPatch } from '../../utils/api/fetchPatch';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_UPDATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
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
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
        dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };