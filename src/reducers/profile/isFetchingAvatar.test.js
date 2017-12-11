import { isFetchingAvatar } from './isFetchingAvatar';
import {
    failFetchingProfileAvatar,
    startFetchingProfileAvatar,
    updateProfileAvatar
} from '../../actions/profile/actionCreators';

describe('isFetchingAvatar reducer', () => {
    test('start fetching avatar ', () => {
        const newState = isFetchingAvatar(false, startFetchingProfileAvatar());
        expect(newState).toBeTruthy();
    });

    test('failed fetching  avatar', () => {
        const newState = isFetchingAvatar(true, failFetchingProfileAvatar('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel fetching of avatar if avatar was fetch', () => {
        const avatarUri = 'https://pv247messaging.blob.core.windows.net/files/edfb0817-7fee-4124-9a75-a3c8ef3f23da/stereo_140_hpa_race.jpg?sv=2017-04-17&sr=b&sig=5%2FPyX6GHAWG34PaAgc1OQWl6ysKj67KFIF%2Fbj';
        const newState = isFetchingAvatar(true, updateProfileAvatar(avatarUri));
        expect(newState).toBeFalsy();
    });
});