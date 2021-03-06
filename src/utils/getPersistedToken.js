import {
    SHARED_EMAIL,
    SHARED_TOKEN,
    SHARED_TOKEN_TIMESTAMP
} from '../constants/localStorageKeys';

const VALID_HOURS = 24;

const isTokenTimeStampValid = () => {
    const originTimeStampJSON = localStorage.getItem(SHARED_TOKEN_TIMESTAMP);
    if(!originTimeStampJSON){
        return false;
    }

    const originTime = new Date(JSON.parse(originTimeStampJSON));
    const currentTime = new Date().getTime();
    const expirationTime = originTime.setHours(originTime.getHours() + VALID_HOURS);

    return expirationTime >= currentTime;
};

const removeInvalidToken = () => {
    localStorage.removeItem(SHARED_TOKEN_TIMESTAMP);
    removeInvalidEmail();
    localStorage.removeItem(SHARED_TOKEN);
};

const removeInvalidEmail = () => {
    localStorage.removeItem(SHARED_EMAIL);
};

export const getPersistedToken = () => {
    const persistedTokenJSON = localStorage.getItem(SHARED_TOKEN) || null;

    if (persistedTokenJSON && !isTokenTimeStampValid()) {
        removeInvalidToken();
        return null;
    }

    return persistedTokenJSON && JSON.parse(persistedTokenJSON);
};

export const getPersistedEmail = () => {
    const persistedEmailJSON = localStorage.getItem(SHARED_EMAIL) || null;

    if (getPersistedToken() === null) {
        removeInvalidEmail();
        return null;
    }

    return persistedEmailJSON && JSON.parse(persistedEmailJSON);
};