import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    createChannel,
    failUploadingChannel,
    startCreatingChannel,
    successUploadingChannel
} from './actionCreators';
import {createHistory} from '../../utils/createHistory';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_CREATE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_CREATE_CHANNEL_MESSAGE
} from '../../constants/uiConstants';

export const uploadChannelFactory = ({fetchPatch, fetchChannels, convertToServerChannelCreate, convertFromServerChannelCreate}) => (channel) =>
    async (dispatch, getState) => {
        dispatch(startCreatingChannel());
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelCreate(channel, getState().shared.email);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerChannel = await fetchPatch(API_APP_URI, authToken, serverChannel);
                const insertedChannel = convertFromServerChannelCreate(receivedServerChannel);
                dispatch(createChannel(insertedChannel));
                dispatch(fetchChannels());
                const history = createHistory();
                history.push(`/channels/${insertedChannel.id}`);

                const dispatchedAction = dispatch(successUploadingChannel(SUCCESS_CREATE_CHANNEL_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failUploadingChannel(FAILED_CREATE_CHANNEL_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }

    };