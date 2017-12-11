import {
    convertFromServerChannel,
    convertFromServerChannelCreate,
    convertFromServerChannels,
    convertFromServerChannelUpdate,
    convertToServerChannelCreate,
    convertToServerChannelCreateFactory,
    convertToServerChannelRemove,
    convertToServerChannelUpdate
} from './channel';

describe('channel api conversion tests', () => {

    test('convertToServerChannelCreate ', () => {
        const email = 'test@test.cz';
        const clientChannel = {name:'test', description: "Desc", users: [{value:"tt@tt.cz"}]};
        const expectedValue = [{
            path: `/channels/-`,
            op: 'add',
            value: {id: 'abc', name: clientChannel.name, customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\"]}"}
        }];
        const convertToServerChannelCreate = convertToServerChannelCreateFactory(() => 'abc');
        const newState = convertToServerChannelCreate(clientChannel, email);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerChannelCreate', () => {
        const serverResponse = {channels: [
            {id: 'abc', name:'test', customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\"]}"},
            {id: 'cde', name:'test2', customData: "{\"description\":\"Desc2\",\"createdBy\":\"test2@test.cz\",\"users\":[\"tt@tt.cz\",\"a@a.cz\"]}"},
        ]};
        const expectedValue = {id: 'cde', name:'test2', description: "Desc2", "createdBy": "test2@test.cz", "users": ["tt@tt.cz", "a@a.cz"]};
        const newState = convertFromServerChannelCreate(serverResponse);
        expect(newState).toEqual(expectedValue);
    });


    test('convertToServerChannelUpdate give o.value or o if is not object', () => {
        const clientChannel = {id: 'abc', name:'test', description: "Desc", "createdBy": "test@test.cz", "users": ["tt@tt.cz", {value: "a@a.cz"}]};
        const expectedValue = [{
            path: `/channels/${clientChannel.id}`,
            op: 'replace',
            value: {id: clientChannel.id, name: clientChannel.name, customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\",\"a@a.cz\"]}"}
        }];
        const newState = convertToServerChannelUpdate(clientChannel);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerChannelUpdate', () => {
        const serverResponse = {channels: [
            {id: 'abc', name:'test', customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\"]}"},
            {id: 'cde', name:'test2', customData: "{\"description\":\"Desc2\",\"createdBy\":\"test2@test.cz\",\"users\":[\"tt@tt.cz\",\"a@a.cz\"]}"},
        ]};
        const expectedValue = {id: 'abc', name:'test', description: "Desc", "createdBy": "test@test.cz", "users": ["tt@tt.cz"]};
        const newState = convertFromServerChannelUpdate(serverResponse, 'abc');
        expect(newState).toEqual(expectedValue);
    });



    test('convertToServerChannelRemove', () => {
        const id = 'abc';
        const expectedValue = [{path: `/channels/${id}`, op: 'remove'}];
        const newState = convertToServerChannelRemove(id);
        expect(newState).toEqual(expectedValue);
    });



    test('convertFromServerChannel to client channel ', () => {
        const serverChannel = {id: 'abc', name:'test', customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\"]}"};
        const expectedValue = {id: 'abc', name:'test', description: "Desc", "createdBy": "test@test.cz", "users": ["tt@tt.cz"]};
        const newState = convertFromServerChannel(serverChannel);
        expect(newState).toEqual(expectedValue);
    });

    test('convertFromServerChannels', () => {
        const serverChannels = {channels: [{id: 'abc', name:'test', customData: "{\"description\":\"Desc\",\"createdBy\":\"test@test.cz\",\"users\":[\"tt@tt.cz\"]}"}]};
        const expectedValue = [{id: 'abc', name:'test', description: "Desc", "createdBy": "test@test.cz", "users": ["tt@tt.cz"]}];
        const newState = convertFromServerChannels(serverChannels);
        expect(newState).toEqual(expectedValue);
    });

});