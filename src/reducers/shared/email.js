import { SHARED_INVALIDATE_TOKEN, SHARED_RECEIVE_EMAIL, SHARED_AUTHENTICATION_FAILED } from '../../constants/actionTypes';

export const email = (prevState = null, action) => {
    switch (action.type) {
        case SHARED_RECEIVE_EMAIL:
            return action.payload.email;
        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_INVALIDATE_TOKEN:
            return null;
        default:
            return prevState;
    }
};