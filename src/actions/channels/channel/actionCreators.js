import {
    MESSAGE_UPLOADING_FAILED,
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGES_FETCHING_FAILED,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_REMOVING_FAILED,
    MESSAGE_LIST_ITEM_UPDATE,
    MESSAGES_FETCHING_STARTED,
    MESSAGE_UPDATING_STARTED,
    MESSAGE_UPDATING_SUCCESS,

} from '../../../constants/actionTypes';
import { statusMessageActionFactory } from '../../../utils/statusMessageActionFactory';


export const createMessage = (newMessage) => {console.log('sj', newMessage); return ({
    type: MESSAGE_LIST_ITEM_CREATE,
    payload: {
        message: {
            ...newMessage
        }
    }
});};

export const deleteMessage = (id) => {console.log('sfdfdsf', id); return ({
    type: MESSAGE_LIST_ITEM_DELETE,
    payload: {
        id
    }
});};

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

export const startUpdatingMessage = (messageId) => ({
    type: MESSAGE_UPDATING_STARTED,
    payload: {
        messageId
    }
});


export const failUploadingMessage = statusMessageActionFactory(MESSAGE_UPLOADING_FAILED);
export const failFetchingMessages = statusMessageActionFactory(MESSAGES_FETCHING_FAILED);
export const failRemovingMessage = statusMessageActionFactory(MESSAGE_REMOVING_FAILED);

export const successUpdatingMessage = statusMessageActionFactory(MESSAGE_UPDATING_SUCCESS);