import { combineReducers } from 'redux';
import { channels } from './channels/channels';
import { editedChannelId } from './editedChannelId';
import { createChannelVisible } from './createChannelVisible';
import { isSaving } from './isSaving';

export const channelApp = combineReducers({
    channels,
    editedChannelId,
    createChannelVisible,
    isSaving
});