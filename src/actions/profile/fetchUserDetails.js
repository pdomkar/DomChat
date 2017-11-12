import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails
} from './actionCreators';

import {
    USER_EMAIL,
    createApiUserUri
} from '../../constants/api';
import { invalidateToken, failAuthentication } from '../shared/actionCreators';
import { convertFromServerDetails } from '../../utils/api/conversions/profileDetails';
import { fetchReceive } from '../../utils/api/fetchReceive';

import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_DETAILS_MESSAGE
} from '../../constants/uiConstants';

export const fetchUserDetails = () =>
    (dispatch, getState) => {
        dispatch(startFetchingProfileDetails);

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(USER_EMAIL);

        return fetchReceive(requestUri, authToken)
            .then((serverDetails) => dispatch(updateProfileDetails((convertFromServerDetails(serverDetails)))))
            .catch((error) => {
                if(error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error;
            })
            .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)));



    };