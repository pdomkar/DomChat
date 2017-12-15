
import {
    startUploadingProfileAvatar,
} from './actionCreators';
import { uploadUserAvatarFactory } from './uploadUserAvatar';

test('uploadUserAvatar dispatches actions in correct order', async done => {
    const dispatch = jest.fn(action => action);
    const expectedAvatarId = 'abc';
    const expectedAvatar = 'avatar';
    const fetchUserAvatar = jest.fn((expectedAvatarId) => expectedAvatar);
    const uploadUserDetails = jest.fn((expectedDetails) => {});

    const getState = () => ({
        profile: {
            details: {
                email: 'test@test.cz',
                name: 'test',
            }
        },
        shared: {
            token: 'token valid',
            email: 'test@test.cz'
        }
    });

    const expectedDetails = {
        ...getState().profile.details,
        avatarId: expectedAvatarId,
    };

    const uploadUserAvatar = uploadUserAvatarFactory({
        fetchFileUpload: () => Promise.resolve([{id: expectedAvatarId}]),
        fetchUserAvatar,
        uploadUserDetails
    });
    const dispatchable = uploadUserAvatar(expectedDetails);
    await dispatchable(dispatch, getState);

    // toHaveBeenCalledWith cannot be used since order matters
    expect(dispatch).toHaveBeenCalledWith(startUploadingProfileAvatar());
    expect(dispatch.mock.calls[1][0]).toEqual(uploadUserDetails(expectedDetails));
    expect(dispatch.mock.calls[2][0]).toEqual(fetchUserAvatar(expectedAvatarId));
    done();
});