import {
    updateUsers,

} from '../../actions/shared/actionCreators';
import { users } from './users';
import { List } from 'immutable';

describe('users reducer', () => {
    test('get users which where was loaded', () => {
        const expectedUsers = [{email:'a@a.cz'}];
        const newState = users(List(), updateUsers(expectedUsers));
        expect(newState).toEqual(List(expectedUsers));
    });

});