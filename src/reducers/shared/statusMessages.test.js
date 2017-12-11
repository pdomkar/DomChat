import {
    dismissStatusMessage,
} from '../../actions/shared/actionCreators';
import { OrderedMap } from 'immutable';
import { statusMessages } from './statusMessages';

describe('statusMessages reducer', () => {
    const sm1 =  {id: '1bc8f1c9-ebae-4591-b2fe-402b2c700d99', text: "test"};
    const sm2 = {id: '72869f50-dd7f-49e1-a7d3-bd19cef2df69', text: 'test2'};

    test('remove message if dismiss', () => {
        const sMessages = [sm1, sm2];
        const newState = statusMessages(OrderedMap(sMessages), dismissStatusMessage('72869f50-dd7f-49e1-a7d3-bd19cef2df69'));
        expect(newState).toEqual(OrderedMap([sm1]));
    });
});