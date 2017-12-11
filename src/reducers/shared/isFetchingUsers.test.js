import { isFetchingUsers } from './isFetchingUsers';
import {
    failFetchingUsers,
    startFetchingUsers,
    updateUsers
} from '../../actions/shared/actionCreators';

describe('isFetchingUsers reducer', () => {
    test('start fetching users ', () => {
        const newState = isFetchingUsers(false, startFetchingUsers());
        expect(newState).toBeTruthy();
    });

    test('failed fetching  users', () => {
        const newState = isFetchingUsers(true, failFetchingUsers('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel fetching of users if users was fetch', () => {
        const newState = isFetchingUsers(true, updateUsers([]));
        expect(newState).toBeFalsy();
    });
});