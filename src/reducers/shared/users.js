import { SHARED_LOAD_USERS } from '../../constants/actionTypes';
import { List } from 'immutable';


export const users = (prevState = List(), action) => {
    switch (action.type) {
        case SHARED_LOAD_USERS:
            return List(action.payload.users);
        default:
            return prevState;
    }
};