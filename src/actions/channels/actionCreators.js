import {
    CHANNELS_LOAD_ALL,
    CHANNEL_CREATE,
    CHANNEL_UPDATE,
    CHANNEL_DELETE,
    CHANNEL_START_EDITING,
    CHANNEL_CANCEL_EDITING,
    CHANNEL_CREATING_START,
    CHANNEL_CREATING_CANCEL,
    CHANNEL_LIST_SAVING_STARTED,
    CHANNEL_LIST_SAVING_FINISHED,
    CHANNEL_UPLOADING_FAILED,
    CHANNELS_FETCHING_FAILED,
    CHANNEL_DELETING_SUCCESS,
    CHANNEL_DELETING_FAILED,
    CHANNEL_UPLOADING_SUCCESS,
    CHANNEL_DELETING_START,
    CHANNEL_UPDATING_START,
    CHANNEL_UPDATING_FAILED,
    CHANNEL_UPDATING_SUCCESS,
} from '../../constants/actionTypes';
import { statusMessageAction } from '../statusMessageActionFactory';

export const updateChannels = (channels) => ({
    type: CHANNELS_LOAD_ALL,
    payload: {
        channels
    }
});

export const createChannel = (newChannel) => ({
    type: CHANNEL_CREATE,
    payload: {
        channel: {
            ...newChannel
        }
    }
});

export const updateChannel = (channel) => ({
    type: CHANNEL_UPDATE,
    payload: {
        channel
    }
});

export const deleteChannel = (id) => ({
    type: CHANNEL_DELETE,
    payload: {
        id
    }
});

export const startEditingChannel = (id) => ({
    type: CHANNEL_START_EDITING,
    payload: {
        id,
    }
});

export const cancelEditingChannel = () => ({
    type: CHANNEL_CANCEL_EDITING,
});

export const startUpdatingChannel = () => ({
    type: CHANNEL_UPDATING_START,
});

export const startDeletingChannel = () => ({
    type: CHANNEL_DELETING_START,
});

export const startCreatingChannel = () => ({
    type: CHANNEL_CREATING_START,
});

export const cancelCreatingChannel = () => ({
    type: CHANNEL_CREATING_CANCEL,
});

export const savingStarted = () => ({
    type: CHANNEL_LIST_SAVING_STARTED,
});
export const savingFinished = () => ({
    type: CHANNEL_LIST_SAVING_FINISHED,
});

export const failUploadingChannel = statusMessageAction(CHANNEL_UPLOADING_FAILED);
export const failDeletingChannel = statusMessageAction(CHANNEL_DELETING_FAILED);
export const failFetchingChannels = statusMessageAction(CHANNELS_FETCHING_FAILED);
export const successDeletingChannel = statusMessageAction(CHANNEL_DELETING_SUCCESS);
export const successUploadingChannel = statusMessageAction(CHANNEL_UPLOADING_SUCCESS);
export const failUpdatingChannel = statusMessageAction(CHANNEL_UPDATING_FAILED);
export const successUpdatingChannel = statusMessageAction(CHANNEL_UPDATING_SUCCESS);