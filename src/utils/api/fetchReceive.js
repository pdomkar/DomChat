import { validateResponse } from './validateResponse';

export const fetchReceiveFactory = (fetch) => (uri, token) =>
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