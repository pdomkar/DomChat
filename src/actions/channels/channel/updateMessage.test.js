import {
    updateMessage as updateMessageAC,
    startUpdatingMessage,
} from './actionCreators';
import { updateMessageFactory } from './updateMessage';

test('updateMessage dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const addAvatarUriToMessage = jest.fn((data) => data);
    const channelId = 'abc';
    const message = {id: 'abc', message: 'Test', vote: 1};
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const convertToServerMessageUpdate = (message) => ({
        value: message.value,
        customData: message.vote
    });
    const convertFromServerMessage =  (serverResponse) => serverResponse;

    const updateMessage = updateMessageFactory({
        fetchUpdateMessage: () => Promise.resolve(message),
        addAvatarUriToMessage,
        convertToServerMessageUpdate,
        convertFromServerMessage
    });
    const dispatchable = updateMessage(channelId, message);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startUpdatingMessage(message.id));
    expect(dispatch.mock.calls[1][0]).toEqual(updateMessageAC(message));
    done();
});