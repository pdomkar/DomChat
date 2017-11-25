import { validateResponse} from './validateResponse';
import {API_USER_URI} from '../../constants/api';

export const fetchCreateUser = (email) => {
    let data = {
        email: email,
        customData: JSON.stringify({
            name: email.split(/@/)[0]
        }),
    };
    return fetch(
        API_USER_URI,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        }
    ).then(validateResponse);
};