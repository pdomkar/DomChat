import {  CHANNEL_LIST_ITEM_UPDATE, CHANNEL_LIST_ITEM_START_EDITING, CHANNEL_LIST_ITEM_CANCEL_EDITING } from '../../../constants/actionTypes';

export const editedChannelId = (prevState = null, action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_START_EDITING:
            return action.payload.id;

        case CHANNEL_LIST_ITEM_CANCEL_EDITING:
        case CHANNEL_LIST_ITEM_UPDATE:
            return null;

        default:
            return null;
    }
};