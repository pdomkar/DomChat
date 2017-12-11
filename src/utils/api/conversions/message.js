export const convertFromServerMessage = (serverResponse) => {
    let data = {};
    try {
        data =  JSON.parse(serverResponse.customData);
    } catch (err) {
        data = {};
    }
    return {
        id: serverResponse.id,
        value: serverResponse.value,
        createdAt: serverResponse.createdAt,
        createdBy: serverResponse.createdBy,
        updatedAt: serverResponse.updatedAt,
        updatedBy: serverResponse.updatedBy,
        ...data
    };
};

export const convertToServerMessageCreate = (message) => ({
    value: message.message,
    customData: JSON.stringify({vote: 0})
});

export const convertToServerMessageUpdate = (message) => ({
    value: message.value,
    customData: JSON.stringify({vote: message.vote})
});


export const convertFromServerMessages =  (serverResponse) => serverResponse.map(convertFromServerMessage);