import { fetchReceive } from './api/fetchReceive';
import {
    createApiFilerUri,
    createApiUserUri
} from '../constants/api';

export const addAvatarUriToMessage = async (message, authToken) => {
    const response = await fetchReceive(createApiUserUri(message.createdBy), authToken);
    const avatarId = JSON.parse(response.customData).avatarId;
    let avatarUriResponse = '';
    if(avatarId) {
        avatarUriResponse = await fetchReceive(createApiFilerUri(avatarId), authToken);
    }
    return {...message, avatarUri: avatarUriResponse};
};