import { isDeletingMessage } from './isDeletingMessage';
import {
    deleteMessage,
    failDeletingMessage,
    startDeletingMessage
} from '../../../actions/channels/channel/actionCreators';

describe('isDeletingMessage reducer', () => {
    test('start deletingMessage ', () => {
        const newState = isDeletingMessage(false, startDeletingMessage());
        expect(newState).toBeTruthy();
    });

    test('failed deleting  Message', () => {
        const newState = isDeletingMessage(true, failDeletingMessage('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel deleting of Message if Message was deleted', () => {
        const newState = isDeletingMessage(true, deleteMessage('1bc8f1c9-ebae-4591-b2fe-402b2c700d99'));
        expect(newState).toBeFalsy();
    });
});