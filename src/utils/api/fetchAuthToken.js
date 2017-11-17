import { API_AUTH_URI } from '../../constants/api';
import { validateResponse } from './validateResponse';

export const fetchAuthToken = (email) => fetch(
    API_AUTH_URI,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(email)
    }
).then(validateResponse);