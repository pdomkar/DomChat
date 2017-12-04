import {
    MESSAGE_UPDATING_STARTED,
    MESSAGE_UPDATING_SUCCESS,
    MESSAGE_UPLOADING_FAILED
} from '../../../constants/actionTypes';

export const updatingMessage = (prevState = null, action) => {
    switch (action.type) {
        case MESSAGE_UPDATING_STARTED:
            return action.payload.messageId;
        case MESSAGE_UPDATING_SUCCESS:
        case MESSAGE_UPLOADING_FAILED:
            return null;

        default:
            return prevState;
    }
};