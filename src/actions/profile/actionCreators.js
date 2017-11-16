import {
    PROFILE_FETCHING_FAILED,
    PROFILE_FETCHING_STARTED,
    PROFILE_UPDATE_DETAILS,
    PROFILE_UPLOADING_FAILED,
    PROFILE_AVATAR_UPLOADING_STARTED,
    PROFILE_AVATAR_UPLOADING_FAILED,
} from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const updateProfileDetails = (details) => ({
    type: PROFILE_UPDATE_DETAILS,
    payload: {
        details,
    }
});

export const startUploadingProfileAvatar = () => ({
    type: PROFILE_AVATAR_UPLOADING_STARTED,
});

export const startFetchingProfileDetails = () => ({
    type: PROFILE_FETCHING_STARTED,
});

export const failFetchingProfileDetails = errorActionFactory(PROFILE_FETCHING_FAILED);

export const failUploadingProfileDetails = errorActionFactory(PROFILE_UPLOADING_FAILED);

export const failUploadingProfileAvatar = errorActionFactory(PROFILE_AVATAR_UPLOADING_FAILED);