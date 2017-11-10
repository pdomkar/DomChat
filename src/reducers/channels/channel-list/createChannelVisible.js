import {  CHANNEL_LIST_ITEM_CREATE, CHANNEL_LIST_ITEM_START_CREATING, CHANNEL_LIST_ITEM_CANCEL_CREATING } from '../../../constants/actionTypes';

export const createChannelVisible = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_START_CREATING:
            return true;

        case CHANNEL_LIST_ITEM_CANCEL_CREATING:
        case CHANNEL_LIST_ITEM_CREATE:
            return false;

        default:
            return prevState;
    }
};