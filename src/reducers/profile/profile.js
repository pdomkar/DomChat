import { combineReducers } from 'redux';
import { details } from './details';
import { isFetchingDetails } from './isFetchingDetails';
import { isUploadingAvatar } from './isUploadingAvatar';

export const profile = combineReducers({
    details,
    isFetchingDetails,
    isUploadingAvatar
});