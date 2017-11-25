import {
    PROFILE_AVATAR_FETCHING_FAILED,
    PROFILE_AVATAR_FETCHING_STARTED,
    PROFILE_FETCHING_FAILED,
    PROFILE_UPDATE_AVATAR
} from '../../constants/actionTypes';

export const isFetchingAvatar = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_AVATAR_FETCHING_STARTED:
            return true;
        case PROFILE_UPDATE_AVATAR:
        case PROFILE_AVATAR_FETCHING_FAILED:
        case PROFILE_FETCHING_FAILED:
            return false;

        default:
            return prevState;
    }
};