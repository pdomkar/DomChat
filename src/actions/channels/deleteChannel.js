import { API_APP_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    deleteChannel as deleteChannelAction,
    failDeletingChannel,
    startDeletingChannel,
    successDeletingChannel,
} from './actionCreators';
import { dismissStatusMessage } from '../shared/actionCreators';
import {
    FAILED_DELETE_CHANNEL_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_DELETE_CHANNEL_MESSAGE
} from '../../constants/uiConstants';


export const deleteChannelFactory = ({fetchPatch, fetchChannels, convertToServerChannelRemove}) => (id) =>
    async (dispatch, getState) => {
        dispatch(startDeletingChannel());
        const authToken = getState().shared.token;
        const serverChannel = convertToServerChannelRemove(id);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                await fetchPatch(API_APP_URI, authToken, serverChannel);
                dispatch(deleteChannelAction(id));
                dispatch(fetchChannels());
                const dispatchedAction = dispatch(successDeletingChannel(SUCCESS_DELETE_CHANNEL_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            const dispatchedAction = dispatch(failDeletingChannel(FAILED_DELETE_CHANNEL_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
    };