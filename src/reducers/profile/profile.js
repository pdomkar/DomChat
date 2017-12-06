import { combineReducers } from 'redux';
import { details } from './details';
import { avatarUri } from './avatarUri';
import { isFetchingDetails } from './isFetchingDetails';
import { isFetchingAvatar } from './isFetchingAvatar';
import { isUploadingAvatar } from './isUploadingAvatar';
import { isFetchingProfileView } from './isFetchingProfileView';
import { profileView } from './profileView';

export const profile = combineReducers({
    details,
    avatarUri,
    profileView,
    isFetchingDetails,
    isFetchingAvatar,
    isFetchingProfileView,
    isUploadingAvatar
});