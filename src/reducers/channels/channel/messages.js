import { List } from 'immutable';
import {
    MESSAGE_LOAD_ALL,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_UPDATE_AVATAR,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_UPDATE
} from '../../../constants/actionTypes';

export const messages = (previousState = List(), action) => {
    switch (action.type) {
        case MESSAGE_LOAD_ALL:
            return List(action.payload.messages);

        case MESSAGE_LIST_ITEM_CREATE:
            return previousState.push({ ...action.payload.message });

        case MESSAGE_LIST_ITEM_UPDATE:
            let index = previousState.findIndex(mess => mess.id === action.payload.message.id);
            if(index >= 0) {
                return previousState.updateIn([index], () => ({ ...action.payload.message }));
            } else {
                return previousState;
            }

        case MESSAGE_LIST_ITEM_DELETE:
            return previousState.filterNot(mess => mess.id === action.payload.id);

        case MESSAGE_UPDATE_AVATAR:
            return previousState;

        default:
            return previousState;
    }
};