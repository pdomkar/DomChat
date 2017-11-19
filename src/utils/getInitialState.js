import { getPersistedToken } from './getPersistedToken';
import { fetchChannels } from '../actions/channels/channel-list/fetchChannels';
import { List } from 'immutable';

export const getInitialState = () => ({
    channelApp: {
        channels: List()
    }, shared: {
        token: getPersistedToken()
    }
});