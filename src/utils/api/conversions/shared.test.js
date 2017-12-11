import {
    convertFromServerUser,
    convertFromServerUsers
} from './shared';

describe('shared api converstion tests', () => {
    test('convertFromServerUser convert one user test ', () => {
        const serverUser = {"email":"test@a.cz","customData":"{\"name\":\"test\"}"};
        const expectedValue = {"email":"test@a.cz", "name": "test"};
        const newState = convertFromServerUser(serverUser);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerUser convert one user test - bad custom data ', () => {
        const serverUser = {"email":"test@a.cz","customData":"{45}"};
        const expectedValue = {"email":"test@a.cz"};
        const newState = convertFromServerUser(serverUser);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerUsers', () => {
        const serverUsers = [{"email":"test@a.cz","customData":"{\"name\":\"test\"}"}];
        const expectedValue = [{"email":"test@a.cz", "name": "test"}];
        const newState = convertFromServerUsers(serverUsers);
        expect(newState).toEqual(expectedValue);
    });
});