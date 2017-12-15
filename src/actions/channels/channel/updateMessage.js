import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import {
    FAILED_UPDATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_UPDATE_VOTE_MESSAGE
} from '../../../constants/uiConstants';
import { createApiMessageDetailUri } from '../../../constants/api';
import { dismissStatusMessage } from '../../shared/actionCreators';
import {
    failUpdatingMessage,
    startUpdatingMessage,
    successUpdatingMessage,
    updateMessage as updateMessageAC
} from './actionCreators';

export const updateMessageFactory = ({fetchUpdateMessage, addAvatarUriToMessage, convertToServerMessageUpdate, convertFromServerMessage}) => (channelId, message) =>
    async (dispatch, getState) => {
        dispatch(startUpdatingMessage(message.id));

        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, message.id);
        const serverMessage = convertToServerMessageUpdate(message);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchUpdateMessage(requestUri, authToken, serverMessage);
                const updatedMessage = convertFromServerMessage(receivedServerMessage);
                const messWithNextData = await addAvatarUriToMessage(updatedMessage, authToken);
                dispatch(updateMessageAC(messWithNextData));

                const dispatchedAction = dispatch(successUpdatingMessage(SUCCESS_UPDATE_VOTE_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failUpdatingMessage(FAILED_UPDATE_MESSAGE_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }

    };