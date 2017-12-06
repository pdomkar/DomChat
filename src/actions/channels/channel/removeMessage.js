import { createApiMessageDetailUri } from '../../../constants/api';
import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import { fetchDelete } from '../../../utils/api/fetchDelete';
import {
    deleteMessage as deleteMessageAC,
    failDeletingMessage,
    startDeletingMessage,
    successDeletingMessage
} from './actionCreators';
import { dismissStatusMessage } from '../../shared/actionCreators';
import {
    FAILED_DELETE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_DELETE_MESSAGE_MESSAGE
} from '../../../constants/uiConstants';

export const deleteMessage  = (channelId, messageId) =>
    async (dispatch, getState) => {
        dispatch(startDeletingMessage());
        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, messageId);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const result = await fetchDelete(requestUri, authToken);
                if(result.status === 200) {
                    dispatch(deleteMessageAC(messageId));
                    const dispatchedAction = dispatch(successDeletingMessage(SUCCESS_DELETE_MESSAGE_MESSAGE));
                    setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
                } else {
                    let e = new Error(`Occur error ${result.status} ${result.statusText}`, result.status);
                    e.statusCode = result.status+'';
                    throw e;
                }
            });
        } catch (error) {
            const dispatchedAction = dispatch(failDeletingMessage(FAILED_DELETE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }

    };