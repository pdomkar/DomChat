
export const convertFromServerUsers = (serverUsers) => serverUsers.map(convertFromServerUser);

export const convertFromServerUser = (serverUser) => {
    console.log(serverUser);
    let data = {};
    try {
        data =  JSON.parse(serverUser.customData);
    } catch (err) {
        data = {};
    }
   return  ({email: serverUser.email, ...data});
};

