import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { channelApp } from './channels/channelApp';
import { shared } from './shared/shared';
import { profile } from './profile/profile';

export const app = combineReducers({
    channelApp,
    shared,
    profile,
    form
});