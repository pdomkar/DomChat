import {
    failFetchingProfileDetails,
    failUploadingProfileAvatar,
    startFetchingProfileDetails,
    startUploadingProfileAvatar,
    updateProfileAvatar,
    updateProfileDetails
} from '../../actions/profile/actionCreators';
import { isFetchingDetails } from './isFetchingDetails';
import { isUploadingAvatar } from './isUploadingAvatar';

describe('isUploadingAvatar reducer', () => {
    test('start uploading avatar ', () => {
        const newState = isUploadingAvatar(false, startUploadingProfileAvatar());
        expect(newState).toBeTruthy();
    });

    test('failed uploading avatar', () => {
        const newState = isUploadingAvatar(true, failUploadingProfileAvatar('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel uploading of avatar if upload of avatar was fetch', () => {
        const avatarUri = 'https://pv247messaging.blob.core.windows.net/files/edfb0817-7fee-4124-9a75-a3c8ef3f23da/stereo_140_hpa_race.jpg?sv=2017-04-17&sr=b&sig=5%2FPyX6GHAWG34PaAgc1OQWl6ysKj67KFIF%2Fbj';
        const newState = isUploadingAvatar(true, updateProfileAvatar(avatarUri));
        expect(newState).toBeFalsy();
    });
});