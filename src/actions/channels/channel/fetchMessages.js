import {
    failFetchingMessages,
    loadMessages,
} from './actionCreators';
import {
    createApiFilerUri,
    createApiMessageUri,
    createApiUserUri
} from '../../../constants/api';
import { fetchReceive } from '../../../utils/api/fetchReceive';
import {
    failAuthentication,
    invalidateToken
} from '../../shared/actionCreators';
import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_MESSAGES_MESSAGE
} from '../../../constants/uiConstants';
import { convertFromServerMessages } from '../../../utils/api/conversions/message';

export const fetchMessages = (channelId) =>
    async (dispatch, getState) => {
        // dispatch(savingStarted());
        const authToken = getState().shared.token;
        const requestUri = createApiMessageUri(channelId);

        try {
            const serverMessages = await fetchReceive(requestUri, authToken);
            console.log("servemessage", serverMessages);
            const clientMessages = convertFromServerMessages(serverMessages);

            const tmp = await Promise.all(clientMessages.map(async function(mess) {
                const response = await fetchReceive(createApiUserUri(mess.createdBy), authToken);
                console.log("response", JSON.parse(response.customData).avatarId);
                const avatarId = JSON.parse(response.customData).avatarId;
                let avatarUriResponse = '';
                if(avatarId) {
                    avatarUriResponse = await fetchReceive(createApiFilerUri(avatarId), authToken);
                }
                console.log("ava",avatarUriResponse);
                let result = {...mess, avatarUri: avatarUriResponse};
                console.log("resss", result);
                return result;
            }));
            console.log("tmp", tmp);
            dispatch(loadMessages(tmp));


        } catch(error) {
            console.log(error);
            dispatch(failFetchingMessages(FAILED_FETCH_MESSAGES_MESSAGE, error));
        }

        // dispatch(savingFinished());
    };