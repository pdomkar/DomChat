import { fetchUserDetailsFactory } from './fetchUserDetails';
import {
    startFetchingProfileDetails,
    updateProfileDetails
} from './actionCreators';

test('dispatches actions in correct order', async done => {
    const exptectedAvatar = 'pretty avatar promissed';
    const expectedAvatarId = 'abc';
    const dispatch = jest.fn(action => action);
    const fetchUserAvatar = jest.fn((expectedAvatarId) => exptectedAvatar);

    const convertFromServerDetails = (serverDetails) => ({
        ...JSON.parse(serverDetails.customData || '{}'),
        email: serverDetails.email,
    });

    const getState = () => ({
        shared: {
            token: 'pretty please'
        }
    });
    const servedDetails = {
        email: 'on@the.phone',
        customData: `{ "avatarId": "${expectedAvatarId}" }`,
    };
    const expectedDetails = {
        email: servedDetails.email,
        ...JSON.parse(servedDetails.customData),
    };

    const fetchUserDetails = fetchUserDetailsFactory({
        fetchReceive: () => Promise.resolve(servedDetails),
        fetchUserAvatar,
        convertFromServerDetails,
    });
    const dispatchable = fetchUserDetails();
    await dispatchable(dispatch, getState);

    // toHaveBeenCalledWith cannot be used since order matters
    expect(dispatch.mock.calls[0][0]).toEqual(startFetchingProfileDetails());
    expect(dispatch.mock.calls[1][0]).toEqual(updateProfileDetails(expectedDetails));
    expect(dispatch.mock.calls[2][0]).toEqual(exptectedAvatar);
    expect(fetchUserAvatar).toHaveBeenCalledWith("abc");
    done();
});