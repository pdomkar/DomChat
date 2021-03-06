import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    failUpdatingChannel,
    startUpdatingChannel,
    successUpdatingChannel,
    updateChannel
} from './actionCreators';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_UPDATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_UPDATE_CHANNEL_MESSAGE
} from '../../constants/uiConstants';


export const uploadUpdatedChannelFactory = ({fetchPatch, fetchChannels, convertToServerChannelUpdate, convertFromServerChannelUpdate}) => (channel) =>
    async (dispatch, getState) => {
        dispatch(startUpdatingChannel());
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelUpdate(channel);
        
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerChannel = await fetchPatch(API_APP_URI, authToken, serverChannel);
                const updatedChannel = convertFromServerChannelUpdate(receivedServerChannel, channel.id);
                dispatch(updateChannel(updatedChannel));
                dispatch(fetchChannels());

                const dispatchedAction = dispatch(successUpdatingChannel(SUCCESS_UPDATE_CHANNEL_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUpdatingChannel(FAILED_UPDATE_CHANNEL_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }

    };