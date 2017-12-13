import {
    createApiFilerUri,
    createApiUserUri
} from '../../../constants/api';

export const addAvatarUriToMessageFactory = (fetchReceive) => async (message, authToken) => {
    const response = await fetchReceive(createApiUserUri(message.createdBy), authToken);
    const customData = JSON.parse(response.customData);
    const avatarId = customData.avatarId;
    let avatarUriResponse = '';
    if(avatarId) {
        avatarUriResponse = await fetchReceive(createApiFilerUri(avatarId), authToken);
    }
    return {...message, name: customData.name, avatarUri: avatarUriResponse};
};