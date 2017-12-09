export const convertToServerMessageCreate = (message) => ({
    value: message.message,
    customData: JSON.stringify({vote: 0})
});

export const convertFromServerMessageCreate = (serverResponse) => {
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


export const convertToServerMessageUpdate = (message) => ({
    value: message.value,
    customData: JSON.stringify({vote: message.vote})
});

export const convertFromServerMessageUpdate = (serverResponse) => {
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