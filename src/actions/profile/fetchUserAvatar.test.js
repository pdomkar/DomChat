import { fetchUserAvatarFactory } from './fetchUserAvatar';
import {
    startFetchingProfileAvatar,
    updateProfileAvatar
} from './actionCreators';

test('fetchUserAvatar dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });

    const expectedUri = 'http://blob/avatar.png';

    const fetchUserAvatar = fetchUserAvatarFactory(() => Promise.resolve(expectedUri));
    const dispatchable = fetchUserAvatar(3);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileAvatar());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileAvatar(expectedUri));
    done();
});