import {
    cancelCreatingChannel,
    createChannel,
    startCreatingChannel,
} from '../../actions/channels/actionCreators';
import { createChannelVisible } from './createChannelVisible';

describe('createChannelVisible reducer', () => {
    test('start creating  createChannelVisible ', () => {
        const newState = createChannelVisible(false, startCreatingChannel());
        expect(newState).toBeTruthy();
    });

    test('cancel create createChannelVisible if channel was created', () => {
        const newState = createChannelVisible(true, createChannel({name:'test channel'}));
        expect(newState).toBeFalsy();
    });

    test('cancel creating  createChannelVisible', () => {
        const newState = createChannelVisible(true, cancelCreatingChannel());
        expect(newState).toBeFalsy();
    });
});