import {
    CHANNEL_DELETE,
    CHANNEL_DELETING_FAILED,
    CHANNEL_DELETING_START,
    PROFILE_DETAILS_FETCHING_FAILED,
    PROFILE_DETAILS_FETCHING_STARTED,
    PROFILE_UPDATE_DETAILS,
} from '../../constants/actionTypes';

export const isDeletingChannel = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_DELETING_START:
            return true;

        case CHANNEL_DELETE:
        case CHANNEL_DELETING_FAILED:
            return false;

        default:
            return prevState;
    }
};