import {
    createMessage,
    startUploadingMessage,
} from './actionCreators';
import { reset } from 'redux-form';
import { uploadMessageFactory } from './uploadMessage';
import { CHANNEL_SEND_MESSAGE_NAME } from '../../../constants/formNames';

test('uploadMessage dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const addAvatarUriToMessage = jest.fn((data) => data);
    const channelId = 'abc';
    const message = {message: 'Test'};
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const convertToServerMessageCreate = (message) => ({
        value: message.message,
        customData: JSON.stringify({vote: 0})
    });
    const convertFromServerMessage =  (serverResponse) => serverResponse;

    const uploadMessage = uploadMessageFactory({
        fetchCreateMessage: () => Promise.resolve(message),
        addAvatarUriToMessage,
        convertToServerMessageCreate,
        convertFromServerMessage
    });
    const dispatchable = uploadMessage(message, channelId);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startUploadingMessage());
    expect(dispatch.mock.calls[1][0]).toEqual(createMessage(message));
    expect(dispatch.mock.calls[2][0]).toEqual(reset(CHANNEL_SEND_MESSAGE_NAME));
    done();
});