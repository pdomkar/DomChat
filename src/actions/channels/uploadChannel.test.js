import {
    createChannel,
    startCreatingChannel
} from './actionCreators';
import { uploadChannelFactory } from './uploadChannel';

test('test uploadChannel Success dispatches actions in the correct order', async done => {
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

    const convertToServerChannelCreate = (channel, userEmail) => [
        {
            path: '/channels/-',
            op: 'add',
            value: {
                id: 'abc',
                name: channel.name,
                customData: JSON.stringify({
                    description: channel.description || '',
                    createdBy: userEmail,
                    users: channel.users.map(o => o.value),
                })
            }
        }
    ];

    const convertFromServerChannelCreate = (serverResponse) => serverResponse.channels[serverResponse.channels.length-1] || '{}';

    const uploadChannel = uploadChannelFactory({
        fetchPatch: () => Promise.resolve(serveredChannels),
        fetchChannels,
        convertToServerChannelCreate,
        convertFromServerChannelCreate
    });

    const dispatchable = uploadChannel(channel);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startCreatingChannel());
    expect(dispatch.mock.calls[1][0]).toEqual(createChannel(channel));
    expect(dispatch.mock.calls[2][0]).toEqual(fetchChannels());

    done();
});