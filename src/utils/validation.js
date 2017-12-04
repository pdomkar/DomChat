export const validateNonEmptyness = fieldName =>
    value =>
        value && value.length
            ? undefined
            : `Please fill ${fieldName}`;

export const validateMaxLength = maxLenght =>
    value =>
        value && value.length > maxLenght
            ? `Please fill text with maximal ${maxLenght} characters.`
            : undefined;