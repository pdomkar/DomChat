import { combineReducers } from 'redux';
import { channel } from './channels/channel';
import { profile } from './profile/profile';

export const app = combineReducers({
    channel,
    profile
});
