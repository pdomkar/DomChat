
export const convertToServerMessageCreate = (message, userEmail) => ({
    value: message.message,
    customData: JSON.stringify({})
});

export const convertFromServerMessageCreate = (serverResponse) => ({
    ...serverResponse
});

export const convertFromServerMessages =  (serverResponse) => serverResponse.map(convertFromServerMessage);


export const convertFromServerMessage = (serverMessage) => {
    let data = {};
    try {
        data =  JSON.parse(serverMessage.customData);
    } catch (err) {
        data = {};
    }
    return {
            id: serverMessage.id,
            value: serverMessage.value,
            createdAt: serverMessage.createdAt,
            createdBy: serverMessage.createdBy,
            ...data
    };
};