import { ITEMS_ALL_ID, ITEMS_BY_ID } from '../../../constants/localStorageKeys';
import {
    savingStarted,
    savingFinished
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem(ITEMS_ALL_ID, JSON.stringify(getState().channelApp.channels.allIds.toJS()));
            localStorage.setItem(ITEMS_BY_ID, JSON.stringify(getState().channelApp.channels.byId.toJS()));
            dispatch(savingFinished());
        }, 1000);
    };