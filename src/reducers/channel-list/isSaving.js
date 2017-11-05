import {  CHANNEL_LIST_SAVING_STARTED, CHANNEL_LIST_SAVING_FINISHED } from '../../constants/actionTypes';

export const isSaving  = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_LIST_SAVING_STARTED:
            return true;

        case CHANNEL_LIST_SAVING_FINISHED:
            return false;

        default:
            return prevState;
    }
};