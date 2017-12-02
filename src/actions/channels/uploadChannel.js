import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    createChannel,
    failUploadingChannel,
    savingFinished,
    savingStarted
} from './actionCreators';
import {
    convertFromServerChannelCreate,
    convertToServerChannelCreate
} from '../../utils/api/conversions/channel';
import { fetchPatch } from '../../utils/api/fetchPatch';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_CREATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../constants/uiConstants';
import { fetchChannels } from './fetchChannels';


export const uploadChannel  = (channel) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        dispatch(savingStarted());
        console.log('email',channel);
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelCreate(channel, getState().shared.email);
        console.log('servCha', serverChannel);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerChannel = await fetchPatch(API_APP_URI, authToken, serverChannel);
                const insertedChannel = convertFromServerChannelCreate(receivedServerChannel);
                dispatch(createChannel(insertedChannel));
                dispatch(fetchChannels());
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUploadingChannel(FAILED_CREATE_CHANNEL_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.message.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
        dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };