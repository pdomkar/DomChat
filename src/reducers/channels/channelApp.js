import { combineReducers } from 'redux';
import { channels } from './channels';
import { editedChannelId } from './editedChannelId';
import { createChannelVisible } from './createChannelVisible';
import { isSaving } from './isSaving';
import { channel } from './channel/channel';

export const channelApp = combineReducers({
    channels,
    channel,
    editedChannelId,
    createChannelVisible,
    isSaving
});