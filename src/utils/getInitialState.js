import { getInitialChannels } from './getInitialChannels';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    channelApp: {
        channels: {
            ...getInitialChannels()
        }
    }, shared: {
        token: getPersistedToken()
    }
});