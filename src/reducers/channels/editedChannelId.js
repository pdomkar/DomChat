import {  CHANNEL_UPDATE, CHANNEL_START_EDITING, CHANNEL_CANCEL_EDITING } from '../../constants/actionTypes';

export const editedChannelId = (prevState = null, action) => {
    switch (action.type) {
        case CHANNEL_START_EDITING:
            return action.payload.id;

        case CHANNEL_CANCEL_EDITING:
        case CHANNEL_UPDATE:
            return null;

        default:
            return prevState;
    }
};