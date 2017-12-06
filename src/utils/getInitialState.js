import { getPersistedToken, getPersistedEmail } from './getPersistedToken';
import { List, OrderedMap } from 'immutable';
import { defaultDetails } from './getDetailsData';

export const getInitialState = () => ({
    channelApp: {
        channels: List(),
        editedChannelId: null,
        isSaving: false,
        createChannelVisible: false,
        channel: {
            isDeletingMessage: false,
            isFetchingMessages: false,
            updatingMessage: null,
            messages: List(),
        },
    }, shared: {
        token: getPersistedToken(),
        email: getPersistedEmail(),
        users: List(),
        isAuthenticating: false,
        statusMessages: OrderedMap(),
    }, profile: {
        avatarUri: null,
        details: defaultDetails,
        isFetchingAvatar: false,
        isFetchingDetails: false,
        isUploadingAvatar: false,
    }
});