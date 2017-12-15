import {
    MESSAGE_UPLOADING_FAILED,
    MESSAGE_LOAD_ALL,
    MESSAGE_CREATE,
    MESSAGES_FETCHING_FAILED,
    MESSAGE_DELETE,
    MESSAGE_UPDATE,
    MESSAGES_FETCHING_STARTED,
    MESSAGE_UPDATING_STARTED,
    MESSAGE_UPDATING_SUCCESS,
    MESSAGE_DELETING_STARTED,
    MESSAGE_DELETING_FAILED,
    MESSAGE_DELETING_SUCCESS,
    MESSAGE_UPDATING_FAILED,
    MESSAGE_UPLOADING_STARTED,
    MESSAGE_UPLOADING_SUCCESS,

} from '../../../constants/actionTypes';
import { statusMessageAction } from '../../statusMessageActionFactory';


export const createMessage = (newMessage) => ({
    type: MESSAGE_CREATE,
    payload: {
        message: {
            ...newMessage
        }
    }
});

export const deleteMessage = (id) => ({
    type: MESSAGE_DELETE,
    payload: {
        id
    }
});

export const updateMessage = (message) => { return ({
    type: MESSAGE_UPDATE,
    payload: {
        message: {
            ...message
        }
    }
});};

export const loadMessages = (messages) => ({
    type: MESSAGE_LOAD_ALL,
    payload: {
        messages
    }
});

export const startFetchingMessages = () => ({
    type: MESSAGES_FETCHING_STARTED,
});

export const startUploadingMessage = () => ({
    type: MESSAGE_UPLOADING_STARTED,
});

export const startUpdatingMessage = (messageId) => ({
    type: MESSAGE_UPDATING_STARTED,
    payload: {
        messageId
    }
});

export const startDeletingMessage = () => ({
    type: MESSAGE_DELETING_STARTED,
});


export const failUploadingMessage = statusMessageAction(MESSAGE_UPLOADING_FAILED);
export const failUpdatingMessage = statusMessageAction(MESSAGE_UPDATING_FAILED);
export const failFetchingMessages = statusMessageAction(MESSAGES_FETCHING_FAILED);
export const failDeletingMessage = statusMessageAction(MESSAGE_DELETING_FAILED);

export const successUploadingMessage = statusMessageAction(MESSAGE_UPLOADING_SUCCESS);
export const successUpdatingMessage = statusMessageAction(MESSAGE_UPDATING_SUCCESS);
export const successDeletingMessage = statusMessageAction(MESSAGE_DELETING_SUCCESS);