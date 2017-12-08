import {
    SHARED_LOAD_USERS,
    SHARED_USERS_FETCHING_FAILED,
    SHARED_USERS_FETCHING_STARTED
} from '../../constants/actionTypes';

export const isFetchingUsers = (prevState = false, action) => {
    switch (action.type) {
        case SHARED_USERS_FETCHING_STARTED:
            return true;
        case SHARED_USERS_FETCHING_FAILED:
        case SHARED_LOAD_USERS:
            return false;
        default:
            return prevState;
    }
};