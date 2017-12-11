import { editedChannelId } from './editedChannelId';
import {
    cancelEditingChannel,
    startEditingChannel,
    updateChannel
} from '../../actions/channels/actionCreators';

describe('editedChannelId reducer', () => {
    test('start editing of channel and save his id', () => {
        const expectedId = '1bc8f1c9-ebae-4591-b2fe-402b2c700d99';
        const newState = editedChannelId(null, startEditingChannel(expectedId));
        expect(newState).toBe(expectedId);
    });

    test('cancel editing of channel', () => {
        const newState = editedChannelId('1bc8f1c9-ebae-4591-b2fe-402b2c700d99', cancelEditingChannel());
        expect(newState).toBeNull();
    });

    test('cancel editing of channel if channel was updated', () => {
        const newState = editedChannelId('1bc8f1c9-ebae-4591-b2fe-402b2c700d99', updateChannel({name: 'Test channel'}));
        expect(newState).toBeNull();
    });
});