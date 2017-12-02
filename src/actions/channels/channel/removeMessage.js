import { createApiMessageDetailUri } from '../../../constants/api';
import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import { fetchDelete } from '../../../utils/api/fetchDelete';
import {
    deleteMessage,
    failRemovingMessage
} from './actionCreators';
import { dismissStatusMessage } from '../../shared/actionCreators';
import {
    FAILED_REMOVE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../../constants/uiConstants';

export const removeMessage  = (channelId, messageId) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        // dispatch(savingStarted());
        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, messageId);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                await fetchDelete(requestUri, authToken);
                //todo zjistit zda je success? a jen tehdy volat dispatch
                dispatch(deleteMessage(messageId));
            });
        } catch (error) {
            const dispatchedAction = dispatch(failRemovingMessage(FAILED_REMOVE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
        // dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };