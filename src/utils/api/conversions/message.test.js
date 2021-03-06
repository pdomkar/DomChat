import {
    convertFromServerMessage,
    convertFromServerMessages,
    convertToServerMessageCreate,
    convertToServerMessageUpdate
} from './message';

describe('messages api conversion tests', () => {
    test('convertFromServerMessage to client message ', () => {
        const serverMessage = {id: 'abc', value:'testMessage', createdAt: '14', createdBy: 'test@test.cz',updatedAt: '14', updatedBy: 'test@test.cz', customData: "{\"vote\": 0, \"votes\": []}"};
        const expectedValue = {id: 'abc', value:'testMessage', createdAt: '14', createdBy: 'test@test.cz',updatedAt: '14', updatedBy: 'test@test.cz', vote: 0, votes: []};
        const newState = convertFromServerMessage(serverMessage);
        expect(newState).toEqual(expectedValue);
    });

    test('convertToServerMessageCreate to server messaeCreate ', () => {
        const clientMessage = {message: 'testMessage', votes: []};
        const expectedValue = {value: clientMessage.message, customData: JSON.stringify({vote: 0, votes: []})};
        const newState = convertToServerMessageCreate(clientMessage);
        expect(newState).toEqual(expectedValue);
    });

    test('convertToServerMessageUpdate to server messaeUpdate ', () => {
        const clientMessage = {value: 'testMessage', vote: 5, votes: []};
        const expectedValue = {value: clientMessage.value, customData: JSON.stringify({vote: clientMessage.vote, votes: []})};
        const newState = convertToServerMessageUpdate(clientMessage);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerMessages', () => {
        const serverResponse = [{id: 'abc', value:'testMessage', createdAt: '14', createdBy: 'test@test.cz',updatedAt: '14', updatedBy: 'test@test.cz', customData: "{\"vote\": 0, \"votes\": []}"}];
        const expectedValue = [{id: 'abc', value:'testMessage', createdAt: '14', createdBy: 'test@test.cz',updatedAt: '14', updatedBy: 'test@test.cz', vote: 0, votes: []}];
        const newState = convertFromServerMessages(serverResponse);
        expect(newState).toEqual(expectedValue);
    });

});