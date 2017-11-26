import { validateResponse} from './validateResponse';

export const fetchUpdateMessage = (uri, token, bodyJson) => {
    return fetch(
        uri,
        {
            method: 'PUT',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson),
        }
    ).then(validateResponse);
};