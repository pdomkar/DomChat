import {
    PROFILE_VIEW_LOADED,
} from '../../constants/actionTypes';
import { defaultProfileView } from '../../utils/getDetailsData';

export const profileView = (prevState = defaultProfileView, action) => {
    switch (action.type) {
        case PROFILE_VIEW_LOADED:
            return action.payload.profileView;
        default:
            return prevState;
    }
};