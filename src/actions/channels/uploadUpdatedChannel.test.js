import {
    startUpdatingChannel,
    updateChannel
} from './actionCreators';
import { uploadUpdatedChannelFactory } from './uploadUpdatedChannel';

test('test uploadUpdatedChannel Success dispatches actions in the correct order', async done => {
    const dispatch = jest.fn();
    const fetchChannels = jest.fn(() => {});

    const getState = () => ({
        shared: {
            token: 'token valid',
            email: 'test@test.cz'
        }
    });

    const channel = {
        name: 'test',
        users: ['test@test.cz']
    };

    const serveredChannels = {channels: [channel]};

    const convertToServerChannelUpdate = (channel) => [
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

    const convertFromServerChannelUpdate = (serverResponse, id) => serverResponse.channels.find(channel => channel.id === id);

    const uploadUpdatedChannel = uploadUpdatedChannelFactory({
        fetchPatch: () => Promise.resolve(serveredChannels),
        fetchChannels,
        convertToServerChannelUpdate,
        convertFromServerChannelUpdate
    });

    const dispatchable = uploadUpdatedChannel(channel);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startUpdatingChannel());
    expect(dispatch.mock.calls[1][0]).toEqual(updateChannel(channel));
    expect(dispatch.mock.calls[2][0]).toEqual(fetchChannels());

    done();
});