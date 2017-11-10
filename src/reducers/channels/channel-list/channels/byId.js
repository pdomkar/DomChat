import * as Immutable from 'immutable';
import {
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_ITEM_UPDATE,
    CHANNEL_LIST_ITEM_DELETE
} from '../../../../constants/actionTypes';

export const byId = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_CREATE:
            return previousState.set(action.payload.channel.id, { ...action.payload.channel });

        case CHANNEL_LIST_ITEM_UPDATE:
            return previousState.mergeIn([action.payload.channel.id], { ...action.payload.channel });

        case CHANNEL_LIST_ITEM_DELETE:
            return previousState.delete(action.payload.id);

        default:
            return previousState;
    }
};