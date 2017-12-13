import {
    savingFinished,
    savingStarted,
    updateChannels,
} from './actionCreators';
import { fetchChannelsFactory } from './fetchChannels';

test('fetchChannels dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const convertFromServerChannels = (data) => data;
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const expectedResponse = {channels: [{id: 'abc', name: 'test'}]};
    const fetchChannels = fetchChannelsFactory(() => Promise.resolve(expectedResponse), convertFromServerChannels);
    const dispatchable = fetchChannels();
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingStarted());
    expect(dispatch).toHaveBeenCalledWith(updateChannels(expectedResponse));
    expect(dispatch).toHaveBeenLastCalledWith(savingFinished());
    done();
});