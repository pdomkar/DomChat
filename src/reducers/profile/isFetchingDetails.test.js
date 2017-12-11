import {
    failFetchingProfileDetails,
    startFetchingProfileDetails,
    updateProfileDetails
} from '../../actions/profile/actionCreators';
import { isFetchingDetails } from './isFetchingDetails';

describe('isFetchingDetails reducer', () => {
    test('start fetching details ', () => {
        const newState = isFetchingDetails(false, startFetchingProfileDetails());
        expect(newState).toBeTruthy();
    });

    test('failed fetching  details', () => {
        const newState = isFetchingDetails(true, failFetchingProfileDetails('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel fetching of details if details was fetch', () => {
        const newState = isFetchingDetails(true, updateProfileDetails({email: 'a@a.c'}));
        expect(newState).toBeFalsy();
    });
});