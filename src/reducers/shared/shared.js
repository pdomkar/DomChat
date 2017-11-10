import { combineReducers } from 'redux';
import { token } from './token';

export const shared = combineReducers({
    token,
});