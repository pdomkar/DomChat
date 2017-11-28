import { performAuthorizedRequest } from '../../profile/performAuthorizedRequest';
import {
    convertFromServerMessageUpdate,
    convertToServerMessageUpdate,
} from '../../../utils/api/conversions/message';
import {
    FAILED_CREATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../../constants/uiConstants';
import { failUploadingMessage } from '../../channels/channel/actionCreators';
import {
    createApiMessageDetailUri,
} from '../../../constants/api';
import { dismissError } from '../../shared/actionCreators';
import { updateMessage as updateMessageAC} from './actionCreators';
import { fetchUpdateMessage } from '../../../utils/api/fetchUpdateMessage';
import { addAvatarUriToMessage } from '../../../utils/addAvatarUriToMessage';


export const updateMessage = (channelId, message) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        // dispatch(savingStarted());
        console.log('message',message);
        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, message.id);
        const serverMessage = convertToServerMessageUpdate(message);
        console.log("server", serverMessage);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchUpdateMessage(requestUri, authToken, serverMessage);
                const updatedMessage = convertFromServerMessageUpdate(receivedServerMessage);
                const messWithAvatarUri = await addAvatarUriToMessage(updatedMessage, authToken);
                dispatch(updateMessageAC(messWithAvatarUri));
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUploadingMessage(FAILED_CREATE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
        // dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };