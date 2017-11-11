import { PROFILE_UPDATE_DETAILS } from '../../constants/actionTypes';

export const updateProfileDetails = (details) => ({
    type: PROFILE_UPDATE_DETAILS,
    payload: {
        details,
    }
});