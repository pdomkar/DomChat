import {
    MESSAGE_UPLOADING_FAILED,
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_FETCHING_FAILED,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_REMOVING_FAILED,
    MESSAGE_LIST_ITEM_UPDATE,

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


export const failUploadingMessage = statusMessageActionFactory(MESSAGE_UPLOADING_FAILED);
export const failFetchingMessages = statusMessageActionFactory(MESSAGE_FETCHING_FAILED);
export const failRemovingMessage = statusMessageActionFactory(MESSAGE_REMOVING_FAILED);