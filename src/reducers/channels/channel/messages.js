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
            return previousState.set(action.payload.channel.id, { ...action.payload.channel });
            return previousState.push({ ...action.payload.message });

        case MESSAGE_LIST_ITEM_UPDATE:
            console.log(previousState);
            console.log(action.payload.message);
            //todo nejak predelat
            return previousState.update(previousState.indexOf(action.payload.message), { ...action.payload.message });

        case MESSAGE_LIST_ITEM_DELETE:
            return previousState.filterNot(mess => mess.id === action.payload.id);

        case MESSAGE_UPDATE_AVATAR:
            return previousState;

        default:
            return previousState;
    }
};