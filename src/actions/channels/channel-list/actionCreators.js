import {uuid} from '../../../utils/uuidGenerator';
import {
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_ITEM_UPDATE,
    CHANNEL_LIST_ITEM_DELETE,
    CHANNEL_LIST_ITEM_START_EDITING,
    CHANNEL_LIST_ITEM_CANCEL_EDITING,
    CHANNEL_LIST_ITEM_START_CREATING,
    CHANNEL_LIST_ITEM_CANCEL_CREATING,
    CHANNEL_LIST_SAVING_STARTED,
    CHANNEL_LIST_SAVING_FINISHED,
} from '../../../constants/actionTypes';

export const createChannel = (newChannel) => ({
    type: CHANNEL_LIST_ITEM_CREATE,
    payload: {
        channel: {
            id: uuid(),
            ...newChannel
        }
    }
});

export const updateChannel = (channel) => ({
    type: CHANNEL_LIST_ITEM_UPDATE,
    payload: {
        channel
    }
});

export const deleteChannel = (id) => ({
    type: CHANNEL_LIST_ITEM_DELETE,
    payload: {
        id
    }
});

export const startEditingChannel = (id) => ({
    type: CHANNEL_LIST_ITEM_START_EDITING,
    payload: {
        id,
    }
});

export const cancelEditingChannel = () => ({
    type: CHANNEL_LIST_ITEM_CANCEL_EDITING,
});


export const startCreatingChannel = () => ({
    type: CHANNEL_LIST_ITEM_START_CREATING,
});

export const cancelCreatingChannel = () => ({
    type: CHANNEL_LIST_ITEM_CANCEL_CREATING,
});

export const savingStarted = () => ({
    type: CHANNEL_LIST_SAVING_STARTED,
});
export const savingFinished = () => ({
    type: CHANNEL_LIST_SAVING_FINISHED,
});
