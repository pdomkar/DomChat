import { validateResponse} from './validateResponse';
import {API_FILE_URI} from '../../constants/api';

export const fetchFileUploadFactory = (fetch) => (token, file) => {
    let formData = new FormData();
    formData.append('Files', file);

    return fetch(
        API_FILE_URI,
        {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Accept': 'application/json',
            },
            body: formData,
        }
    ).then(validateResponse);
};