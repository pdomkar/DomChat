import {
    PROFILE_DETAILS_FETCHING_FAILED,
    PROFILE_DETAILS_FETCHING_STARTED,
    PROFILE_UPDATE_DETAILS,
    PROFILE_DETAILS_UPLOADING_FAILED,
    PROFILE_AVATAR_UPLOADING_STARTED,
    PROFILE_AVATAR_UPLOADING_FAILED,
    PROFILE_AVATAR_FETCHING_FAILED,
    PROFILE_AVATAR_FETCHING_STARTED,
    PROFILE_UPDATE_AVATAR,
    PROFILE_DETAILS_UPLOADING_SUCCESS,
    PROFILE_AVATAR_UPLOADING_SUCCESS,
} from '../../constants/actionTypes';
import { statusMessageActionFactory } from '../../utils/statusMessageActionFactory';

export const updateProfileDetails = (details) => ({
    type: PROFILE_UPDATE_DETAILS,
    payload: {
        details,
    }
});
export const startFetchingProfileDetails = () => ({
    type: PROFILE_DETAILS_FETCHING_STARTED,
});


export const updateProfileAvatar = (avatarUri) => ({
    type: PROFILE_UPDATE_AVATAR,
    payload: {
        avatarUri,
    }
});
export const startFetchingProfileAvatar = () => ({
    type: PROFILE_AVATAR_FETCHING_STARTED,
});

export const startUploadingProfileAvatar = () => ({
    type: PROFILE_AVATAR_UPLOADING_STARTED,
});


export const failFetchingProfileDetails = statusMessageActionFactory(PROFILE_DETAILS_FETCHING_FAILED);
export const failUploadingProfileDetails = statusMessageActionFactory(PROFILE_DETAILS_UPLOADING_FAILED);
export const successUploadingProfileDetails = statusMessageActionFactory(PROFILE_DETAILS_UPLOADING_SUCCESS);

export const failUploadingProfileAvatar = statusMessageActionFactory(PROFILE_AVATAR_UPLOADING_FAILED);
export const failFetchingProfileAvatar = statusMessageActionFactory(PROFILE_AVATAR_FETCHING_FAILED);
export const successUploadingProfileAvatar = statusMessageActionFactory(PROFILE_AVATAR_UPLOADING_SUCCESS);

