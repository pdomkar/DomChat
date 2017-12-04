import { combineReducers } from 'redux';
import { messages } from './messages';
import { isFetchingMessages } from './isFetchingMessages';
import { updatingMessage } from './updatingMessage';

export const channel = combineReducers({
    messages,
    isFetchingMessages,
    updatingMessage,
});