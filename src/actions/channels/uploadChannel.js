import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../profile/performAuthorizedRequest';
import {
    createChannel,
    savingFinished,
    savingStarted
} from './actionCreators';
import {
    convertFromServerChannelCreate,
    convertToServerChannelCreate
} from '../../utils/api/conversions/channel';
import { fetchPatch } from '../../utils/api/fetchPatch';
import { dismissError } from '../shared/actionCreators';
import {
    FAILED_CREATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import { failUploadingChannel } from '../profile/actionCreators';
import { fetchChannels } from './fetchChannels';


export const uploadChannel  = (channel) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        dispatch(savingStarted());
        console.log('email',channel);
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelCreate(channel, getState().shared.email);
        console.log("servCh", serverChannel);
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
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
        dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };