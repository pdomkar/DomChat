import { getInitialChannels } from './getInitialChannels';

export const getInitialState = () => ({
    channelApp: {
        channels: {
            ...getInitialChannels()
        }
    }
});