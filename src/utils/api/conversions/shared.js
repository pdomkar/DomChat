
export const convertFromServerUsers = (serverUsers) => serverUsers.map(convertFromServerUser);

export const convertFromServerUser = (serverUser) => {
    let data = {};
    try {
        data =  JSON.parse(serverUser.customData);
    } catch (err) {
        data = {};
    }
    return  ({email: serverUser.email, ...data});
};

