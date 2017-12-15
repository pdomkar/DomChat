import {
    deleteMessage as deleteMessageAC,
    startDeletingMessage,
} from './actionCreators';
import { deleteMessageFactory } from './deleteMessage';

test('deleteMessage dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const channelId = 'abc';
    const messageId = 'abc';
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const deleteMessage = deleteMessageFactory(
        () => Promise.resolve({status: 200}),
    );
    const dispatchable = deleteMessage(channelId, messageId);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startDeletingMessage());
    expect(dispatch.mock.calls[1][0]).toEqual(deleteMessageAC(messageId));
    done();
});