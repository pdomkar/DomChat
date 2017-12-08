import {
    CHANNEL_UPDATE,
    CHANNEL_UPDATING_FAILED,
    CHANNEL_UPDATING_START,
} from '../../constants/actionTypes';

export const isUpdatingChannel = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_UPDATING_START:
            return true;

        case CHANNEL_UPDATE:
        case CHANNEL_UPDATING_FAILED:
            return false;

        default:
            return prevState;
    }
};