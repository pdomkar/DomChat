import { performAuthorizedRequest } from '../../shared/performAuthorizedRequest';
import {
    FAILED_UPDATE_MESSAGE_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    SUCCESS_UPDATE_VOTE_MESSAGE
} from '../../../constants/uiConstants';
import { createApiMessageDetailUri } from '../../../constants/api';
import { dismissStatusMessage } from '../../shared/actionCreators';
import {
    failUpdatingMessage,
    startUpdatingMessage,
    successUpdatingMessage,
    updateMessage as updateMessageAC
} from './actionCreators';
import { UP } from '../../../constants/common';

export const updateMessageFactory = ({fetchUpdateMessage, addAvatarUriToMessage, convertToServerMessageUpdate, convertFromServerMessage}) => (channelId, message, type) => async (dispatch, getState) => {
    dispatch(startUpdatingMessage(message.id));

    const authToken = getState().shared.token;
    const email = getState().shared.email;
    const requestUri = createApiMessageDetailUri(channelId, message.id);

    const messageEdited = editMessageVote(message, type, email);

    const serverMessage = convertToServerMessageUpdate(messageEdited);

    try {
        await performAuthorizedRequest(dispatch, async () => {
            const receivedServerMessage = await fetchUpdateMessage(requestUri, authToken, serverMessage);
            const updatedMessage = convertFromServerMessage(receivedServerMessage);
            const messWithNextData = await addAvatarUriToMessage(updatedMessage, authToken);
            dispatch(updateMessageAC(messWithNextData));

            const dispatchedAction = dispatch(successUpdatingMessage(SUCCESS_UPDATE_VOTE_MESSAGE));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        });
    } catch (error) {
        if (error.statusCode !== 401) {
            const dispatchedAction = dispatch(failUpdatingMessage(FAILED_UPDATE_MESSAGE_MESSAGE, error));
            setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
        }
    }

};

export const editMessageVote = (message, type, email) => {
    const voteItem = {email: email, type: type};
    const voteIndex = message.votes.findIndex(v => v.email === email);
    if (voteIndex === -1) {
        message.votes.push(voteItem);
        message.vote = type === UP ? message.vote +1 : message.vote - 1;
    } else {
        if (message.votes[voteIndex].type === type) {
            message.vote =  type === UP ? message.vote - 1 : message.vote + 1;
            message.votes.splice(voteIndex, 1);
        } else {
            message.vote =  type === UP ? message.vote + 2 : message.vote - 2;
            message.votes[voteIndex] = voteItem;
        }
    }

    return {...message};
};

