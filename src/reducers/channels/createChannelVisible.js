import {  CHANNEL_CREATE, CHANNEL_CREATING_START, CHANNEL_CREATING_CANCEL } from '../../constants/actionTypes';

export const createChannelVisible = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_CREATING_START:
            return true;

        case CHANNEL_CREATING_CANCEL:
        case CHANNEL_CREATE:
            return false;

        default:
            return prevState;
    }
};