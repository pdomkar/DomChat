import {
    loadMessages,
    startFetchingMessages,
} from './actionCreators';
import { fetchMessagesFactory } from './fetchMessages';

test('fetchMessages dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const addAvatarUriToMessage = jest.fn((data) => data);
    const convertFromServerMessages = (serverResponse) => serverResponse;
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const expectedResponse = [
        {id: 'abc', value: 'test', createdAt: '2017-12-09T11:06:59.5907577Z'},
        {id: 'bcd', value: 'test2', createdAt: '2017-12-08T16:12:53.2100779Z'}
    ];
    const fetchMessages = fetchMessagesFactory({
        fetchReceive: () => Promise.resolve(expectedResponse),
        addAvatarUriToMessage,
        convertFromServerMessages
    });
    const dispatchable = fetchMessages();
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingMessages());
    expect(dispatch.mock.calls[1][0]).toEqual(loadMessages(expectedResponse));
    done();
});