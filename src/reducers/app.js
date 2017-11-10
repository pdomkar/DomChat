import { combineReducers } from 'redux';
import { channelApp } from './channels/channel-list/channelApp';
import { shared } from './shared/shared';

export const app = combineReducers({
    channelApp,
    shared
});