import { validateResponse } from './validateResponse';

export const fetchPatch = (uri, token, bodyJson) =>
    fetch(
        uri,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson),
        }).then(validateResponse);