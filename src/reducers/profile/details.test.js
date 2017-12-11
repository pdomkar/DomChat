import {
    updateProfileDetails,
} from '../../actions/profile/actionCreators';
import {
    defaultDetails,
} from '../../utils/getDetailsData';
import { details } from './details';

describe('details reducer', () => {
    test('loaded profile details', () => {
        const expectedDetails = {...defaultDetails, email: 'a@a.cz', name: 'a'};
        const newState = details(defaultDetails, updateProfileDetails(expectedDetails));
        expect(newState).toEqual(expectedDetails);
    });
});