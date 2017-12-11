import { avatarUri } from './avatarUri';
import { updateProfileAvatar } from '../../actions/profile/actionCreators';

describe('avatarUri reducer', () => {
    test('avatarUri update load ', () => {
        const expectedAvatarUri = 'https://pv247messaging.blob.core.windows.net/files/edfb0817-7fee-4124-9a75-a3c8ef3f23da/stereo_140_hpa_race.jpg?sv=2017-04-17&sr=b&sig=5%2FPyX6GHAWG34PaAgc1OQWl6ysKj67KFIF%2Fbj';
        const newState = avatarUri(null, updateProfileAvatar(expectedAvatarUri));
        expect(newState).toBe(expectedAvatarUri);
    });
});