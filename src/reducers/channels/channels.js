import { List } from 'immutable';
import {
    CHANNEL_CREATE,
    CHANNEL_UPDATE,
    CHANNEL_DELETE,
    CHANNELS_LOAD_ALL
} from '../../constants/actionTypes';

export const channels = (previousState = List(), action) => {
    switch (action.type) {
        case CHANNELS_LOAD_ALL:
            return List(action.payload.channels);

        case CHANNEL_CREATE:
            return previousState.set(action.payload.channel.id, { ...action.payload.channel });

        case CHANNEL_UPDATE:
            return previousState.mergeIn([action.payload.channel.id], { ...action.payload.channel });

        case CHANNEL_DELETE:
            return previousState.delete(action.payload.id);

        default:
            return previousState;
    }
};