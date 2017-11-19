import { uuid } from '../../uuidGenerator';
import { List } from '../../../../node_modules/immutable/dist/immutable';

export const convertToServerChannelCreate = (channel) => [
    {
        path: '/channels/-',
        op: 'add',
        value: {
            id: uuid(),
            ...channel,
            customData: ''
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
            ...channel,
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

export const convertFromServerChannels = (serverResponse) => serverResponse.channels;

