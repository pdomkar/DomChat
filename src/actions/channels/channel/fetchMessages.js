import {
    failFetchingMessages,
    loadMessages,
    startFetchingMessages,
} from './actionCreators';
import { createApiMessageUri } from '../../../constants/api';
import {
    FAILED_FETCH_MESSAGES_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE
} from '../../../constants/uiConstants';
import { convertFromServerMessages } from '../../../utils/api/conversions/message';
import { dismissStatusMessage } from '../../shared/actionCreators';

export const fetchMessagesFactory = ({fetchReceive, addAvatarUriToMessage}) => (channelId) =>
    async (dispatch, getState) => {
        dispatch(startFetchingMessages());

        const authToken = getState().shared.token;
        const requestUri = createApiMessageUri(channelId);

        try {
            const serverMessages = await fetchReceive(requestUri, authToken);
            const clientMessages = convertFromServerMessages(serverMessages);
            clientMessages.sort((a,b) => a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0);
            const clientMessagesFull = await Promise.all(
                clientMessages.map(async function(mess) {
                    return await addAvatarUriToMessage(mess, authToken);
                })
            );
            dispatch(loadMessages(clientMessagesFull));
        } catch(error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failFetchingMessages(FAILED_FETCH_MESSAGES_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }
    };