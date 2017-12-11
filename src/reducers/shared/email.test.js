import {
    failAuthentication,
    invalidateToken,
    receiveValidEmail,

} from '../../actions/shared/actionCreators';
import { email } from './email';

describe('email reducer', () => {
    test('get email by authenticating ', () => {
        const expectedEmail = 'a@a.cz';
        const newState = email(null, receiveValidEmail(expectedEmail));
        expect(newState).toBe(expectedEmail);
    });

    test('failed authenticating so email is null', () => {
        const newState = email('a@a.cz', failAuthentication('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeNull();
    });

    test('invalidate token so email is null', () => {
        const newState = email('a@a.cz', invalidateToken());
        expect(newState).toBeNull();
    });
});