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
    PROFILE_VIEW_FETCHING_FAILED,
    PROFILE_VIEW_FETCHING_STARTED,
    PROFILE_VIEW_LOADED,
} from '../../constants/actionTypes';
import { statusMessageAction } from '../statusMessageActionFactory';

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

export const updateProfileView = (profileView) => ({
    type: PROFILE_VIEW_LOADED,
    payload: {
        profileView,
    }
});

export const startFetchingProfileAvatar = () => ({
    type: PROFILE_AVATAR_FETCHING_STARTED,
});

export const startUploadingProfileAvatar = () => ({
    type: PROFILE_AVATAR_UPLOADING_STARTED,
});

export const startFetchingProfileView = () => ({
    type: PROFILE_VIEW_FETCHING_STARTED,
});


export const failFetchingProfileDetails = statusMessageAction(PROFILE_DETAILS_FETCHING_FAILED);
export const failUploadingProfileDetails = statusMessageAction(PROFILE_DETAILS_UPLOADING_FAILED);
export const successUploadingProfileDetails = statusMessageAction(PROFILE_DETAILS_UPLOADING_SUCCESS);

export const failUploadingProfileAvatar = statusMessageAction(PROFILE_AVATAR_UPLOADING_FAILED);
export const failFetchingProfileAvatar = statusMessageAction(PROFILE_AVATAR_FETCHING_FAILED);
export const successUploadingProfileAvatar = statusMessageAction(PROFILE_AVATAR_UPLOADING_SUCCESS);

export const failFetchingProfileView = statusMessageAction(PROFILE_VIEW_FETCHING_FAILED);