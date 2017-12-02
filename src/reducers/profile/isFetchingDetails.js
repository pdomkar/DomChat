import {
    PROFILE_DETAILS_FETCHING_FAILED,
    PROFILE_DETAILS_FETCHING_STARTED,
    PROFILE_UPDATE_DETAILS,
} from '../../constants/actionTypes';

export const isFetchingDetails = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_FETCHING_STARTED:
            return true;

        case PROFILE_UPDATE_DETAILS:
        case PROFILE_DETAILS_FETCHING_FAILED:
            return false;

        default:
            return prevState;
    }
};