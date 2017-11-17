import { LOGIN_UPDATE_EMAIL } from '../../constants/actionTypes';

export const email = (prevState = {email:'petr@test.cz'}, action) => {
    switch (action.type) {
        case LOGIN_UPDATE_EMAIL:
            return action.payload.email;
        default:
            return prevState;
    }
};