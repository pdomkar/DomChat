import {
    LOGIN_UPDATE_EMAIL,
} from '../../constants/actionTypes';

export const updateLoginEmail = (email) => ({
    type: LOGIN_UPDATE_EMAIL,
    payload: {
        email,
    }
});