import { validateResponse } from './validateResponse';

export const fetchDelete = async (uri, token) =>
    fetch(
        uri,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'aplication/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);