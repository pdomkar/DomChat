import { uuid } from '../../uuidGenerator';

export const convertToServerChannelCreate = (channel, userEmail) => [
    {
        path: '/channels/-',
        op: 'add',
        value: {
            id: uuid(),
            name: channel.name,
            customData: JSON.stringify({
                description: channel.description || '',
                createdBy: userEmail,
                users: channel.users.map(o => o.value) || [],
            })
        }
    }
];
export const convertFromServerChannelCreate = (serverResponse) => ({
    ...serverResponse.channels[serverResponse.channels.length-1] || '{}',
});

export const convertToServerChannelUpdate = (channel) => [
    {
        path: `/channels/${channel.id}`,
        op: 'replace',
        value: {
            id: channel.id,
            name: channel.name,
            customData: JSON.stringify({
                description: channel.description || '',
                createdBy: channel.createdBy,
                users: channel.users.map(o => o.value) || [],
            })
        }
    }
];
export const convertFromServerChannelUpdate = (serverResponse, id) => serverResponse.channels.find(channel => channel.id === id);

export const convertToServerChannelRemove = (id) => [
    {
        path: `/channels/${id}`,
        op: 'remove',
    }
];

export const convertFromServerChannels = (serverResponse) => serverResponse.channels.map(convertFromServerChannel);



export const convertFromServerChannel = (serverChannel) => ({id: serverChannel.id, name: serverChannel.name, ...JSON.parse(serverChannel.customData === '' ? '{}' : serverChannel.customData)});

