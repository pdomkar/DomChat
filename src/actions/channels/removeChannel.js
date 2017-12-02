import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    deleteChannel,
    failRemovingChannel,
    savingFinished,
    savingStarted,
} from './actionCreators';
import {
    convertToServerChannelRemove
} from '../../utils/api/conversions/channel';
import { fetchPatch } from '../../utils/api/fetchPatch';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_REMOVE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
import { fetchChannels } from './fetchChannels';


export const removeChannel  = (id) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        dispatch(savingStarted());
        console.log('id',id);
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelRemove(id);
        console.log(serverChannel);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerChannel = await fetchPatch(API_APP_URI, authToken, serverChannel);
                console.log(receivedServerChannel);
                dispatch(deleteChannel(id));
                dispatch(fetchChannels());
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failRemovingChannel(FAILED_REMOVE_CHANNEL_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
        dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };