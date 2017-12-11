import {
    MESSAGE_UPDATE,
    MESSAGE_UPDATING_FAILED,
    MESSAGE_UPDATING_STARTED,
} from '../../../constants/actionTypes';

export const updatingMessage = (prevState = null, action) => {
    switch (action.type) {
        case MESSAGE_UPDATING_STARTED:
            return action.payload.messageId;
        case MESSAGE_UPDATE:
        case MESSAGE_UPDATING_FAILED:
            return null;

        default:
            return prevState;
    }
};