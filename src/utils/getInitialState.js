import { getPersistedToken, getPersistedEmail } from './getPersistedToken';
import { fetchChannels } from '../actions/channels/fetchChannels';
import { List } from 'immutable';

export const getInitialState = () => ({
    channelApp: {
        channels: List()
    }, shared: {
        token: getPersistedToken(),
        email: getPersistedEmail(),
    }
});