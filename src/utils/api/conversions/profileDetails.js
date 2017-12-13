export const convertFromServerDetailsFactory = (serverDetails) => ({
    ...JSON.parse(serverDetails.customData || '{}'),
    email: serverDetails.email,
});

export const convertToServerDetails = (details) => JSON.stringify({
    ...details,
    email: undefined,
});