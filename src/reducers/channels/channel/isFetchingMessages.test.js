import {
    failFetchingMessages,
    loadMessages,
    startFetchingMessages
} from '../../../actions/channels/channel/actionCreators';
import { isFetchingMessages } from './isFetchingMessages';

describe('isFetchingMessages reducer', () => {
    test('start fetching messages ', () => {
        const newState = isFetchingMessages(false, startFetchingMessages());
        expect(newState).toBeTruthy();
    });

    test('failed fetching  Messages', () => {
        const newState = isFetchingMessages(true, failFetchingMessages('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel fetching of Messages if Messages was fetch', () => {
        const newState = isFetchingMessages(true, loadMessages([]));
        expect(newState).toBeFalsy();
    });
});