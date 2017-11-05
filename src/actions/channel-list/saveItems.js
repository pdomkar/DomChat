import {items} from '../../constants/localStorageKeys';
import {
    savingStarted,
    savingFinished
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem(items.allIds, JSON.stringify(getState().channelApp.channels.allIds.toJS()));
            localStorage.setItem(items.byId, JSON.stringify(getState().channelApp.channels.byId.toJS()));
            dispatch(savingFinished());
        }, 1000);
    };