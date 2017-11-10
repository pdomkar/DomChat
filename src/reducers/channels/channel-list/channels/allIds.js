import * as Immutable from 'immutable';
import {
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_ITEM_DELETE
} from '../../../../constants/actionTypes';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_CREATE:
            return previousState.push(action.payload.channel.id);

        case CHANNEL_LIST_ITEM_DELETE:
            return previousState.filterNot(id => id === action.payload.id);

        default:
            return previousState;
    }
};