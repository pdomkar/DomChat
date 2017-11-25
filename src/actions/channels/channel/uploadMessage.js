import { performAuthorizedRequest } from '../../profile/performAuthorizedRequest';
import {
    convertFromServerMessageCreate,
    convertToServerMessageCreate,
} from '../../../utils/api/conversions/message';
import {
    FAILED_CREATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../../constants/uiConstants';
import { failUploadingMessage } from '../../channels/channel/actionCreators';
import { createApiMessageUri } from '../../../constants/api';
import { dismissError } from '../../shared/actionCreators';
import { fetchCreateMessage } from '../../../utils/api/fetchCreateMessage';
import { CHANNEL_SEND_MESSAGE_NAME } from '../../../constants/formNames';
import {reset} from 'redux-form';
import { fetchMessages } from './fetchMessages';
import { createMessage } from './actionCreators';


export const uploadMessage = (message, channelId) =>
    async (dispatch, getState) => {
        // dispatch(startSubmit(CHANNEL_NEW_FORM_NAME));
        // dispatch(savingStarted());
        console.log('email',message);
        const authToken = getState().shared.token;
        const requestUri = createApiMessageUri(channelId);
        const serverMessage = convertToServerMessageCreate(message, getState().shared.email);
        console.log("servM", serverMessage);
        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerMessage = await fetchCreateMessage(requestUri, authToken, serverMessage);
                console.log("a", receivedServerMessage);
                const insertedMessage = convertFromServerMessageCreate(receivedServerMessage);
                console.log("in", insertedMessage);
                dispatch(reset(CHANNEL_SEND_MESSAGE_NAME));
                dispatch(createMessage(insertedMessage));
                // dispatch(fetchMessages(channelId));
            });
        } catch (error) {
            console.log(error);
            const dispatchedAction = dispatch(failUploadingMessage(FAILED_CREATE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
        // dispatch(savingFinished());
        // return dispatch(stopSubmit(CHANNEL_NEW_FORM_NAME));

    };