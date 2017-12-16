const API_URI = 'https://pv247messaging.azurewebsites.net/api';
const API_APP_ID = '21f75fa5-df7a-4c36-9f6f-0266723e9c6c';//'01199bfc-0604-4faf-ab70-d1165e7c5bcd';

export const API_AUTH_URI = `${API_URI}/auth`;
export const API_FILE_URI = `${API_URI}/file`;
export const API_USER_URI = `${API_URI}/${API_APP_ID}/user`;
export const API_APP_URI = `${API_URI}/app/${API_APP_ID}`;

export const createApiUserUri =  (userEmail) => `${API_URI}/${API_APP_ID}/user/${userEmail}`;
export const createApiFilerUri = (fileId) => `${API_URI}/file/${fileId}/download-link`;
export const createApiMessageUri =  (channelId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message`;
export const createApiMessageDetailUri =  (channelId, messageId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message/${messageId}`;