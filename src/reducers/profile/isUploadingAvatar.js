import {
    PROFILE_AVATAR_UPLOADING_STARTED,
    PROFILE_AVATAR_UPLOADING_FAILED,
    PROFILE_UPDATE_DETAILS,
} from '../../constants/actionTypes';

export const isUploadingAvatar = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_AVATAR_UPLOADING_STARTED:
            return true;

        case PROFILE_UPDATE_DETAILS:
        case PROFILE_AVATAR_UPLOADING_FAILED:
            return false;

        default:
            return prevState;
    }
};