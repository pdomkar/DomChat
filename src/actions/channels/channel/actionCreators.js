import {
    MESSAGE_UPLOADING_FAILED,
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_FETCHING_FAILED,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_REMOVING_FAILED,
    MESSGE_FETCHING_AVATAR_FAILED,
    MESSAGE_UPDATE_AVATAR,

} from '../../../constants/actionTypes';
import { errorActionFactory } from '../../../utils/errorActionFactory';


export const createMessage = (newMessage) => {console.log("sf", newMessage); return ({
    type: MESSAGE_LIST_ITEM_CREATE,
    payload: {
        message: {
            ...newMessage
        }
    }
})};

export const deleteMessage = (id) => ({
    type: MESSAGE_LIST_ITEM_DELETE,
    payload: {
       id
    }
});

export const loadMessages = (messages) => ({
    type: MESSAGE_LOAD_ALL,
    payload: {
        messages
    }
});


export const failUploadingMessage = errorActionFactory(MESSAGE_UPLOADING_FAILED);
export const failFetchingMessages = errorActionFactory(MESSAGE_FETCHING_FAILED);
export const failRemovingMessage = errorActionFactory(MESSAGE_REMOVING_FAILED);