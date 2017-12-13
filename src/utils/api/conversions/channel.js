import { uuid } from '../../uuidGenerator';

export const convertToServerChannelCreateFactory = uuid => (channel, userEmail) => [
    {
        path: '/channels/-',
        op: 'add',
        value: {
            id: uuid(),
            name: channel.name,
            customData: JSON.stringify({
                description: channel.description || '',
                createdBy: userEmail,
                users: channel.users.map(o => o.value),
            })
        }
    }
];
export const convertToServerChannelCreate = convertToServerChannelCreateFactory(uuid);

export const convertFromServerChannelCreate = (serverResponse) => ({
    ...convertFromServerChannel(serverResponse.channels[serverResponse.channels.length-1]) || '{}',
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
                users: channel.users.map(o => o.value || o) || [],
            })
        }
    }
];
export const convertFromServerChannelUpdate = (serverResponse, id) =>
    convertFromServerChannel(serverResponse.channels.find(channel => channel.id === id));

export const convertToServerChannelRemove = (id) => [
    {
        path: `/channels/${id}`,
        op: 'remove',
    }
];

export const convertFromServerChannelsFactory = (serverResponse) => serverResponse.channels.map(convertFromServerChannel);


export const convertFromServerChannel = (serverChannel) => ({
    id: serverChannel.id,
    name: serverChannel.name,
    ...JSON.parse(serverChannel.customData === '' ? '{}' : serverChannel.customData)
});

