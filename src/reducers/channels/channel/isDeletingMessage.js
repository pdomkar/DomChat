import {
    MESSAGE_DELETING_FAILED,
    MESSAGE_DELETING_STARTED,
    MESSAGE_DELETING_SUCCESS,
} from '../../../constants/actionTypes';

export const isDeletingMessage = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGE_DELETING_STARTED:
            return true;
        case MESSAGE_DELETING_SUCCESS:
        case MESSAGE_DELETING_FAILED:
            return false;

        default:
            return prevState;
    }
};