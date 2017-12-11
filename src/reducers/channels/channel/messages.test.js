import { messages } from './messages';
import { List } from 'immutable';
import {
    createMessage,
    deleteMessage,
    loadMessages,
    updateMessage
} from '../../../actions/channels/channel/actionCreators';

describe('messages reducer', () => {
    const mes1 = {id: '1bc8f1c9-ebae-4591-b2fe-402b2c700d99', value: "mess"};
    const mes2 = {id: '72869f50-dd7f-49e1-a7d3-bd19cef2df69', name: 'mess new'};

    test('loaded all messages ', () => {
        const messagesArrExp = [mes1];
        const newState = messages(List(), loadMessages(messagesArrExp));
        expect(newState).toEqual(List(messagesArrExp));
    });

    test('create message ', () => {
        const messagesArr = [mes1];
        const expectedmessagesArr = [...messagesArr, ...[mes2]];
        const newState = messages(List(messagesArr), createMessage(mes2));
        expect(newState).toEqual(List(expectedmessagesArr));
    });

    test('updated message ', () => {
        const messagesArr = [mes1, mes2];
        const updMessage = {...mes2, name: 'testUpdate'};
        const expectedmessagesArr = [mes1, updMessage];
        const newState = messages(List(messagesArr), updateMessage(updMessage));
        expect(newState).toEqual(List(expectedmessagesArr));
    });

    test('delete message ', () => {
        const messagesArr = [mes1, mes2];
        const expectedmessagesArr = [mes1];
        const newState = messages(List(messagesArr), deleteMessage(mes2.id));
        expect(newState).toEqual(List(expectedmessagesArr));
    });

    test('delete not exist message ', () => {
        const messagesArrExpected = [mes1, mes2];
        const newState = messages(List(messagesArrExpected), deleteMessage('sdfsdf'));
        expect(newState).toEqual(List(messagesArrExpected));
    });

});