import { combineReducers } from 'redux';
import { channels } from './channels';
import { editedChannelId } from './editedChannelId';
import { createChannelVisible } from './createChannelVisible';
import { isSaving } from './isSaving';
import { channel } from './channel/channel';
import { isDeletingChannel } from './isDeletingChannel';
import { isUpdatingChannel } from './isUpdatingChannel';

export const channelApp = combineReducers({
    channels,
    channel,
    editedChannelId,
    createChannelVisible,
    isDeletingChannel,
    isUpdatingChannel,
    isSaving
});