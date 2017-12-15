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
            return previousState.push({ ...action.payload.channel });

        case CHANNEL_UPDATE: {
            let index = previousState.findIndex(channel => channel.id === action.payload.channel.id);
            if(index >= 0) {
                return previousState.updateIn([index], () => ({ ...action.payload.channel }));
            } else {
                return previousState;
            }
        }
        case CHANNEL_DELETE:
            return previousState.filterNot(channel => channel.id === action.payload.id);

        default:
            return previousState;
    }
};