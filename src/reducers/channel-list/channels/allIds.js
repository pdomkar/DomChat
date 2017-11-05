import * as Immutable from 'immutable';
import {
    CHANNEL_LIST_ITEM_CREATE,
} from '../../../constants/actionTypes';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_CREATE:
            return previousState.push(action.payload.channel.id);

        default:
            return previousState;
    }
};