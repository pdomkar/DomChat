import { List } from 'immutable';
import {
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_UPDATE_AVATAR
} from '../../../constants/actionTypes';

export const messages = (previousState = List(), action) => {
    switch (action.type) {
        case MESSAGE_LOAD_ALL:
            return List(action.payload.messages);
        case MESSAGE_LIST_ITEM_CREATE:
            return previousState.set(action.payload.message.id, { ...action.payload.message });
        case MESSAGE_UPDATE_AVATAR:
            return previousState;
        default:
            return previousState;
    }
};