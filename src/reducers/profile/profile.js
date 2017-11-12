import { combineReducers } from 'redux';
import { details } from './details';
import { isFetchingDetails } from './isFetchingDetails';

export const profile = combineReducers({
    details,
    isFetchingDetails
});