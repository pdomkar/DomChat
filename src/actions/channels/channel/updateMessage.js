import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import {
    convertFromServerMessageUpdate,
    convertToServerMessageUpdate,
} from '../../../utils/api/conversions/message';
import {
    FAILED_CREATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_UPDATE_MESSAGE
} from '../../../constants/uiConstants';
import { failUploadingMessage } from '../../channels/channel/actionCreators';
import {
    createApiMessageDetailUri,
} from '../../../constants/api';
import { dismissStatusMessage } from '../../shared/actionCreators';
import {
    startUpdatingMessage,
    successUpdatingMessage,
    updateMessage as updateMessageAC
} from './actionCreators';
import { fetchUpdateMessage } from '../../../utils/api/fetchUpdateMessage';
import { addAvatarUriToMessage } from '../../../utils/addAvatarUriToMessage';


export const updateMessage = (channelId, message) =>
    async (dispatch, getState) => {
        dispatch(startUpdatingMessage(message.id));
        console.log('message',message);
        const authToken = getState().shared.token;
        const requestUri = createApiMessageDetailUri(channelId, message.id);
        const serverMessage = convertToServerMessageUpdate(message);
        console.log('server', serverMessage);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchUpdateMessage(requestUri, authToken, serverMessage);
                const updatedMessage = convertFromServerMessageUpdate(receivedServerMessage);
                const messWithAvatarUri = await addAvatarUriToMessage(updatedMessage, authToken);
                dispatch(updateMessageAC(messWithAvatarUri));
                const dispatchedAction = dispatch(successUpdatingMessage(SUCCESS_UPDATE_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUploadingMessage(FAILED_CREATE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
        // dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };