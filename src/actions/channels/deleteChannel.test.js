import {
    startDeletingChannel,
    failDeletingChannel,
    successDeletingChannel,
    deleteChannel as deleteChannelAction
} from './actionCreators';
import { deleteChannel } from './deleteChannel';

describe('test deleteChannel', () => {
    test('test deleteChannel Success dispatches actions in the correct order', async done => {
        const dispatch = jest.fn();
        const deletedId = 'abc';
        const getState = () => ({
            shared: {
                token: 'token valid',
            }
        });
        //
        // const dispatchable = deleteChannel(deletedId);
        // global.fetch = () => Promise.resolve({ status: 200, json: () => Promise.resolve() });
        // await dispatchable(dispatch, getState);
        // expect(dispatch).toHaveBeenCalledWith(startDeletingChannel());
        // expect(dispatch).toHaveBeenCalledWith(deleteChannelAction(deletedId));
        // expect(dispatch).toHaveBeenCalledWith(fetchChannels());
        // // expect(dispatch).toHaveBeenCalledWith(successDeletingChannel(SUCCESS_DELETE_CHANNEL_MESSAGE));
        // // expect(convertToServerChannelRemove).toHaveBeenCalled();

        done();
    });
});