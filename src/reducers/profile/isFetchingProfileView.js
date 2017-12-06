import { PROFILE_VIEW_FETCHING_STARTED } from '../../constants/actionTypes';
import { PROFILE_VIEW_LOADED } from '../../constants/actionTypes';
import { PROFILE_VIEW_FETCHING_FAILED } from '../../constants/actionTypes';

export const isFetchingProfileView = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_VIEW_FETCHING_STARTED:
            return true;

        case PROFILE_VIEW_LOADED:
        case PROFILE_VIEW_FETCHING_FAILED:
            return false;

        default:
            return prevState;
    }
};