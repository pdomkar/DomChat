import {
    MESSAGE_UPLOADING_FAILED,
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGES_FETCHING_FAILED,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_UPDATE,
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
import { statusMessageActionFactory } from '../../../utils/statusMessageActionFactory';


export const createMessage = (newMessage) => ({
    type: MESSAGE_LIST_ITEM_CREATE,
    payload: {
        message: {
            ...newMessage
        }
    }
});

export const deleteMessage = (id) => ({
    type: MESSAGE_LIST_ITEM_DELETE,
    payload: {
        id
    }
});

export const updateMessage = (message) => { return ({
    type: MESSAGE_LIST_ITEM_UPDATE,
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


export const failUploadingMessage = statusMessageActionFactory(MESSAGE_UPLOADING_FAILED);
export const failUpdatingMessage = statusMessageActionFactory(MESSAGE_UPDATING_FAILED);
export const failFetchingMessages = statusMessageActionFactory(MESSAGES_FETCHING_FAILED);
export const failDeletingMessage = statusMessageActionFactory(MESSAGE_DELETING_FAILED);

export const successUploadingMessage = statusMessageActionFactory(MESSAGE_UPLOADING_SUCCESS);
export const successUpdatingMessage = statusMessageActionFactory(MESSAGE_UPDATING_SUCCESS);
export const successDeletingMessage = statusMessageActionFactory(MESSAGE_DELETING_SUCCESS);