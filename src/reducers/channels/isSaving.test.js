import {
    savingFinished,
    savingStarted,
} from '../../actions/channels/actionCreators';
import { isSaving } from './isSaving';

describe('isSaving reducer', () => {
    test('start saving ', () => {
        const newState = isSaving(false, savingStarted());
        expect(newState).toBeTruthy();
    });

    test('finish saving', () => {
        const newState = isSaving(true, savingFinished());
        expect(newState).toBeFalsy();
    });
});