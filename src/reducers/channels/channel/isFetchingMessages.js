import {
    MESSAGES_FETCHING_FAILED,
    MESSAGES_FETCHING_STARTED,
    MESSAGE_LOAD_ALL
} from '../../../constants/actionTypes';

export const isFetchingMessages = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGES_FETCHING_STARTED:
            return true;
        case MESSAGE_LOAD_ALL:
        case MESSAGES_FETCHING_FAILED:
            return false;

        default:
            return prevState;
    }
};