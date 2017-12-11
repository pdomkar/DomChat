import { isDeletingMessage } from './isDeletingMessage';
import {
    deleteMessage,
    failDeletingMessage,
    failUpdatingMessage,
    startDeletingMessage,
    startUpdatingMessage,
    updateMessage
} from '../../../actions/channels/channel/actionCreators';
import { updatingMessage } from './updatingMessage';

describe('updatingMessage reducer', () => {
    test('start updatingMessage ', () => {
        const newState = updatingMessage(false, startUpdatingMessage('1bc8f1c9-ebae-4591-b2fe-402b2c700d99'));
        expect(newState).toBeTruthy();
    });

    test('failed updatingMessage', () => {
        const newState = updatingMessage(true, failUpdatingMessage('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel updating of Message if Message was updated', () => {
        const newState = updatingMessage(true, updateMessage({value:'mesage'}));
        expect(newState).toBeFalsy();
    });
});