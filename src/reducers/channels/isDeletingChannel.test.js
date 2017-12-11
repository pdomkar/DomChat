import {
    deleteChannel,
    failDeletingChannel,
    startDeletingChannel,
} from '../../actions/channels/actionCreators';
import { isDeletingChannel } from './isDeletingChannel';

describe('isDeletingChannel reducer', () => {
    test('start deletingChannel ', () => {
        const newState = isDeletingChannel(false, startDeletingChannel());
        expect(newState).toBeTruthy();
    });

    test('failed deleting  channel', () => {
        const newState = isDeletingChannel(true, failDeletingChannel('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel deleting of channel if channel was deleted', () => {
        const newState = isDeletingChannel(true, deleteChannel('1bc8f1c9-ebae-4591-b2fe-402b2c700d99'));
        expect(newState).toBeFalsy();
    });
});