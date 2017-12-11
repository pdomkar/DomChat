import {

    updateProfileView
} from '../../actions/profile/actionCreators';
import { defaultProfileView } from '../../utils/getDetailsData';
import { profileView } from './profileView';

describe('profileView reducer', () => {
    test('loaded profile view', () => {
        const expectedProfileView = {...defaultProfileView, email: 'a@a.cz'};
        const newState = profileView(defaultProfileView, updateProfileView(expectedProfileView));
        expect(newState).toEqual(expectedProfileView);
    });
});