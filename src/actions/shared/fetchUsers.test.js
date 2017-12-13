import {
    startFetchingUsers,
    updateUsers,
} from './actionCreators';

import { fetchUsersFactory } from './fetchUsers';

test('fetchUsers dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const convertFromServerChannels = (data) => data;
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const expectedResponse = [{email: 'test@test.cz'}];
    const fetchUsers = fetchUsersFactory(() => Promise.resolve(expectedResponse), convertFromServerChannels);
    const dispatchable = fetchUsers();
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingUsers());
    expect(dispatch).toHaveBeenLastCalledWith(updateUsers(expectedResponse));
    done();
});