import { combineReducers } from 'redux';
import { messages } from './messages';

export const channel = combineReducers({
    messages
});