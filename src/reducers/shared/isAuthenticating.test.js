import {
    failAuthentication,
    receiveValidToken,
    startAuthentication,
} from '../../actions/shared/actionCreators';
import { isAuthenticating } from './isAuthenticating';

describe('isAuthenticating reducer', () => {
    test('start authenticating ', () => {
        const newState = isAuthenticating(false, startAuthentication());
        expect(newState).toBeTruthy();
    });

    test('failed authenticating', () => {
        const newState = isAuthenticating(true, failAuthentication('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel authenticating if user was authenticated', () => {
        const newState = isAuthenticating(true, receiveValidToken('valid token'));
        expect(newState).toBeFalsy();
    });
});