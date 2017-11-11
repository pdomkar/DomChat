export const validateNonEmptyness = (fieldName) =>
    (value) =>
        value && value.length
            ? undefined
            : `Please fill ${fieldName}`;