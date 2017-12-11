import {
    convertFromServerDetails,
    convertToServerDetails
} from './profileDetails';

describe('profileDetals api conversion tests', () => {
    test('convertFromServerDetails to client details ', () => {
        const serverDetails = {"email":"test@test.cz","customData":"{\"name\":\"test\",\"avatarId\":\"edfb\",\"fullname\":\"Test\",\"whatIDo\":\"Testing\"}"};
        const expectedValue = {"email":"test@test.cz", "name": "test","avatarId":"edfb","fullname":"Test","whatIDo":"Testing"};
        const newState = convertFromServerDetails(serverDetails);
        expect(newState).toEqual(expectedValue);
    });

    test('convertToServerDetails to server details stringify ', () => {
        const clientDetails = {"name": "test","avatarId":"edfb","fullname":"Test","whatIDo":"Testing", "email":"test@test.cz"};
        const expectedValue = JSON.stringify({"name": "test","avatarId":"edfb","fullname":"Test","whatIDo":"Testing"});
        const newState = convertToServerDetails(clientDetails);
        expect(newState).toEqual(expectedValue);
    });
});