import { validateResponse} from './validateResponse';

export const fetchCreateMessageFactory = (fetch) => (uri, token, bodyJson) => {
    return fetch(
        uri,
        {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson),
        }
    ).then(validateResponse);
};