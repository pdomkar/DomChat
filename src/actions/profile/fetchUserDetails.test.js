import {
    startFetchingProfileDetails,
    updateProfileDetails
} from './actionCreators';
import { fetchUserDetailsFactory } from './fetchUserDetails';
import { fetchUserAvatar } from './index';

test('fetchUserDetails dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const getState = () => ({
        shared: {
            token: 'valid token',
            email: 'test@test.cz'
        }
    });

    const expectedResponse = {email: 'test@test.cz'};

    const fetchUserDetails = fetchUserDetailsFactory({
        fetchReceive:() => Promise.resolve(expectedResponse),
        fetchUserAvatar: fetchUserAvatar(() => Promise.resolve(expectedResponse))
    });
    const dispatchable = fetchUserDetails();
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileDetails());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileDetails(expectedResponse));
    done();
});