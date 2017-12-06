import { reset } from 'redux-form';
import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import {
    convertFromServerMessageCreate,
    convertToServerMessageCreate,
} from '../../../utils/api/conversions/message';
import {
    FAILED_CREATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_CREATE_MESSAGE_MESSAGE
} from '../../../constants/uiConstants';
import { failUploadingMessage } from '../../channels/channel/actionCreators';
import { createApiMessageUri } from '../../../constants/api';
import { dismissStatusMessage } from '../../shared/actionCreators';
import { fetchCreateMessage } from '../../../utils/api/fetchCreateMessage';
import { CHANNEL_SEND_MESSAGE_NAME } from '../../../constants/formNames';
import {
    createMessage,
    startUploadingMessage,
    successUploadingMessage
} from './actionCreators';
import { addAvatarUriToMessage } from '../../../utils/addAvatarUriToMessage';


export const uploadMessage = (message, channelId) =>
    async (dispatch, getState) => {
        dispatch(startUploadingMessage());

        const authToken = getState().shared.token;
        const requestUri = createApiMessageUri(channelId);
        const serverMessage = convertToServerMessageCreate(message);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchCreateMessage(requestUri, authToken, serverMessage);
                const insertedMessage = convertFromServerMessageCreate(receivedServerMessage);
                const messWithNextData = await addAvatarUriToMessage(insertedMessage, authToken);

                dispatch(createMessage(messWithNextData));
                dispatch(reset(CHANNEL_SEND_MESSAGE_NAME));

                const dispatchedAction = dispatch(successUploadingMessage(SUCCESS_CREATE_MESSAGE_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failUploadingMessage(FAILED_CREATE_MESSAGE_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        }
    };