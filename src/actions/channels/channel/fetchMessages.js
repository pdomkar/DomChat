import {
    failFetchingMessages,
    loadMessages,
    startFetchingMessages,
} from './actionCreators';
import {
    createApiFilerUri,
    createApiMessageUri,
    createApiUserUri
} from '../../../constants/api';
import { fetchReceive } from '../../../utils/api/fetchReceive';
import {
    FAILED_FETCH_MESSAGES_MESSAGE
} from '../../../constants/uiConstants';
import { convertFromServerMessages } from '../../../utils/api/conversions/message';

export const fetchMessages = (channelId) =>
    async (dispatch, getState) => {
        dispatch(startFetchingMessages());
        console.log('fetching....');
        const authToken = getState().shared.token;
        const requestUri = createApiMessageUri(channelId);

        try {
            const serverMessages = await fetchReceive(requestUri, authToken);
            const clientMessages = convertFromServerMessages(serverMessages);
            console.log('client', clientMessages);
            clientMessages.sort((a,b) => a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0);
            const clientMessagesWithAvatars = await Promise.all(clientMessages.map(async function(mess) {
                const response = await fetchReceive(createApiUserUri(mess.createdBy), authToken);
                const avatarId = JSON.parse(response.customData).avatarId;
                let avatarUriResponse = '';
                if(avatarId) {
                    avatarUriResponse = await fetchReceive(createApiFilerUri(avatarId), authToken);
                }
                return {...mess, avatarUri: avatarUriResponse};
            }));
            dispatch(loadMessages(clientMessagesWithAvatars));


        } catch(error) {
            dispatch(failFetchingMessages(FAILED_FETCH_MESSAGES_MESSAGE, error));
        }

        // dispatch(savingFinished());
    };