const API_URI = 'https://pv247messaging.azurewebsites.net/api';
const API_APP_ID = '01199bfc-0604-4faf-ab70-d1165e7c5bcd';
export const USER_EMAIL = 'petr@test.cz';

export const API_AUTH_URI = `${API_URI}/auth`;
export const API_FILE_URI = `${API_URI}/file`;
export const createApiUserUri =  (userEmail) => `${API_URI}/${API_APP_ID}/user/${userEmail}`;
export const createApiFilerUri = (fileId) => `${API_URI}/file/${fileId}/download-link`;