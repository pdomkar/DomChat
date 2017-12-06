import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'connected-react-router';

import {
    SHARED_DISMISS_STATUS_MESSAGE,
    SHARED_AUTHENTICATION_FAILED,
    CHANNELS_FETCHING_FAILED,
    PROFILE_DETAILS_FETCHING_FAILED,
    PROFILE_DETAILS_UPLOADING_SUCCESS,
    PROFILE_DETAILS_UPLOADING_FAILED,
    PROFILE_AVATAR_UPLOADING_FAILED,
    PROFILE_AVATAR_FETCHING_FAILED,
    PROFILE_AVATAR_UPLOADING_SUCCESS,
    MESSAGE_UPDATING_SUCCESS,
    CHANNEL_DELETING_SUCCESS,
    CHANNEL_DELETING_FAILED,
    MESSAGES_FETCHING_FAILED,
    MESSAGE_DELETING_FAILED,
    MESSAGE_DELETING_SUCCESS,
    MESSAGE_UPDATING_FAILED,
} from '../../constants/actionTypes';

export const statusMessages = (previousState = Immutable.OrderedMap(), action) => {
    switch(action.type) {
        case SHARED_AUTHENTICATION_FAILED:
        case CHANNELS_FETCHING_FAILED:
        case PROFILE_DETAILS_FETCHING_FAILED:
        case PROFILE_DETAILS_UPLOADING_SUCCESS:
        case PROFILE_DETAILS_UPLOADING_FAILED:
        case PROFILE_AVATAR_UPLOADING_FAILED:
        case PROFILE_AVATAR_FETCHING_FAILED:
        case PROFILE_AVATAR_UPLOADING_SUCCESS:
        case CHANNEL_DELETING_SUCCESS:
        case CHANNEL_DELETING_FAILED:
        case MESSAGES_FETCHING_FAILED:
        case MESSAGE_DELETING_FAILED:
        case MESSAGE_DELETING_SUCCESS:
        case MESSAGE_UPDATING_FAILED:
        case MESSAGE_UPDATING_SUCCESS:
        // case CHANNEL_UPLOADING_FAILED:
            return previousState.set(action.payload.statusMessage.id, {...action.payload.statusMessage});
        case SHARED_DISMISS_STATUS_MESSAGE:
            return previousState.delete(action.payload.statusMessageId);
        case LOCATION_CHANGE:
            return previousState.clear();
        default:
            return previousState;
    }
};