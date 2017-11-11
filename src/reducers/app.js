import { combineReducers } from 'redux';
import { channelApp } from './channels/channel-list/channelApp';
import { shared } from './shared/shared';
import { profile } from './profile/profile';

import { reducer as form } from 'redux-form';

export const app = combineReducers({
    channelApp,
    shared,
    profile,
    form
});