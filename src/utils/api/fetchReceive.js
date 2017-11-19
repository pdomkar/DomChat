import { validateResponse } from './validateResponse';

export const fetchReceive = async (uri, token) =>
    fetch(
        uri,
        {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'aplication/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);