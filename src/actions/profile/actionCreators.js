import {
    PROFILE_FETCHING_FAILED,
    PROFILE_FETCHING_STARTED,
    PROFILE_UPDATE_DETAILS,
    PROFILE_UPLOADING_FAILED,
    PROFILE_AVATAR_UPLOADING_STARTED,
    PROFILE_AVATAR_UPLOADING_FAILED,
    PROFILE_AVATAR_FETCHING_FAILED,
    PROFILE_AVATAR_FETCHING_STARTED,
    PROFILE_UPDATE_AVATAR,
    CHANNEL_UPLOADING_FAILED,
    CHANNEL_REMOVING_FAILED,
    CHANNELS_FETCHING_FAILED,
} from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const updateProfileDetails = (details) => ({
    type: PROFILE_UPDATE_DETAILS,
    payload: {
        details,
    }
});

export const updateProfileAvatar = (avatarUri) => ({
    type: PROFILE_UPDATE_AVATAR,
    payload: {
        avatarUri,
    }
});

export const startUploadingProfileAvatar = () => ({
    type: PROFILE_AVATAR_UPLOADING_STARTED,
});

export const startFetchingProfileAvatar = () => ({
    type: PROFILE_AVATAR_FETCHING_STARTED,
});

export const startFetchingProfileDetails = () => ({
    type: PROFILE_FETCHING_STARTED,
});

export const failFetchingProfileDetails = errorActionFactory(PROFILE_FETCHING_FAILED);
export const failUploadingProfileDetails = errorActionFactory(PROFILE_UPLOADING_FAILED);
export const failUploadingProfileAvatar = errorActionFactory(PROFILE_AVATAR_UPLOADING_FAILED);
export const failFetchingProfileAvatar = errorActionFactory(PROFILE_AVATAR_FETCHING_FAILED);

export const failUploadingChannel = errorActionFactory(CHANNEL_UPLOADING_FAILED);
export const failRemovingChannel = errorActionFactory(CHANNEL_REMOVING_FAILED);
export const failFetchingChannels = errorActionFactory(CHANNELS_FETCHING_FAILED);