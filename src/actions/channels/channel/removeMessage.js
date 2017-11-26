import { createApiMessageDetailUri } from '../../../constants/api';
import { performAuthorizedRequest } from '../../profile/performAuthorizedRequest';
import { fetchDelete } from '../../../utils/api/fetchDelete';
import { fetchMessages } from './fetchMessages';
import {
    deleteMessage,
    failRemovingMessage
} from './actionCreators';
import { dismissError } from '../../shared/actionCreators';
import {
    FAILED_REMOVE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../../constants/uiConstants';

export const removeMessage  = (channelId, messageId) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        // dispatch(savingStarted());
        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, messageId);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const result = await fetchDelete(requestUri, authToken);
                dispatch(deleteMessage(messageId));
            });
        } catch (error) {
            const dispatchedAction = dispatch(failRemovingMessage(FAILED_REMOVE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
        // dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };