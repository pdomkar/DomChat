import {
    validateMaxLength,
    validateNonEmptyness
} from './validation';

describe('validation test', () => {
    test('test validateNonEmptyness function - not valid', () => {
        const valueExec =  validateNonEmptyness('name');
        expect(valueExec('')).toBe(`Please fill name`);
    });

    test('test validateNonEmptyness function - valid', () => {
        const valueExec =  validateNonEmptyness('name');
        expect(valueExec('Test')).toBeUndefined();
    });

    test('test validateMaxLength function - not valid', () => {
        const valueExec =  validateMaxLength(5);
        expect(valueExec('Long text')).toBe('Please fill text with maximal 5 characters.');
    });

    test('test validateMaxLength function - valid', () => {
        const valueExec =  validateMaxLength(5);
        expect(valueExec('Long')).toBeUndefined();
    });

    test('test validateMaxLength function - valid - not fill', () => {
        const valueExec =  validateMaxLength(5);
        expect(valueExec('')).toBeUndefined();
    });

});