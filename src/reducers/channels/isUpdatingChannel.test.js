import {
    failUpdatingChannel,
    startUpdatingChannel,
    updateChannel,
} from '../../actions/channels/actionCreators';
import { isUpdatingChannel } from './isUpdatingChannel';

describe('isUpdatingChannel reducer', () => {
    test('start updating Channel ', () => {
        const expectedValue = true;
        const newState = isUpdatingChannel(false, startUpdatingChannel(expectedValue));
        expect(newState).toBeTruthy();
    });

    test('failed updating  channel', () => {
        const newState = isUpdatingChannel(true, failUpdatingChannel('e message', {statusCode: 'c', statusText:'t'}));
        expect(newState).toBeFalsy();
    });

    test('cancel updating of channel if channel was updated', () => {
        const newState = isUpdatingChannel(true, updateChannel({name: 'Test channel'}));
        expect(newState).toBeFalsy();
    });
});