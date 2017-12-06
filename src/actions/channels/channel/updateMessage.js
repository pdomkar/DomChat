import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import {
    convertFromServerMessageUpdate,
    convertToServerMessageUpdate,
} from '../../../utils/api/conversions/message';
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
import { fetchUpdateMessage } from '../../../utils/api/fetchUpdateMessage';
import { addAvatarUriToMessage } from '../../../utils/addAvatarUriToMessage';


export const updateMessage = (channelId, message) =>
    async (dispatch, getState) => {
        dispatch(startUpdatingMessage(message.id));

        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, message.id);
        const serverMessage = convertToServerMessageUpdate(message);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchUpdateMessage(requestUri, authToken, serverMessage);
                const updatedMessage = convertFromServerMessageUpdate(receivedServerMessage);
                const messWithNextData = await addAvatarUriToMessage(updatedMessage, authToken);
                dispatch(updateMessageAC(messWithNextData));

                const dispatchedAction = dispatch(successUpdatingMessage(SUCCESS_UPDATE_VOTE_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            const dispatchedAction = dispatch(failUpdatingMessage(FAILED_UPDATE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }

    };