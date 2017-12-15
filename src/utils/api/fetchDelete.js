export const fetchDeleteFactory = (fetch) => async (uri, token) =>
    fetch(
        uri,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'aplication/json',
                'Accept': 'application/json',
            },
        });