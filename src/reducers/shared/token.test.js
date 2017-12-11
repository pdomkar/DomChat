import {
    failAuthentication,
    invalidateToken,
    receiveValidToken,

} from '../../actions/shared/actionCreators';
import { token } from './token';

describe('token reducer', () => {
    test('get token by authenticating ', () => {
        const expectedToken = 'valid token';
        const newState = token(null, receiveValidToken(expectedToken));
        expect(newState).toBe(expectedToken);
    });

    test('failed authenticating so token is null', () => {
        const newState = token('valid token', failAuthentication('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeNull();
    });

    test('invalidate token so token is null', () => {
        const newState = token('valid token', invalidateToken());
        expect(newState).toBeNull();
    });
});