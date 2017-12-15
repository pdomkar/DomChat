import {
    startDeletingChannel,
    failDeletingChannel,
    successDeletingChannel,
    deleteChannel as deleteChannelAction
} from './actionCreators';
import {
    deleteChannel,
    deleteChannelFactory
} from './deleteChannel';

describe('test deleteChannel', () => {
    test('test deleteChannel Success dispatches actions in the correct order', async done => {
        const dispatch = jest.fn();
        const deletedId = 'abc';
        const fetchChannels = jest.fn(() => {});

        const getState = () => ({
            shared: {
                token: 'token valid',
            }
        });

        const convertToServerChannelRemove = (id) => [
            {
                path: `/channels/${id}`,
                op: 'remove',
            }
        ];

        const deleteChannel = deleteChannelFactory({
            fetchPatch: () => Promise.resolve({ status: 200, json: () => Promise.resolve() }),
            fetchChannels,
            convertToServerChannelRemove,
        });

        const dispatchable = deleteChannel(deletedId);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startDeletingChannel());
        expect(dispatch.mock.calls[1][0]).toEqual(deleteChannelAction(deletedId));
        expect(dispatch.mock.calls[2][0]).toEqual(fetchChannels());

        done();
    });
});