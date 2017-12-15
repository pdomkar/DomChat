import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import {
    updateProfileDetails,
    failUploadingProfileDetails,
    successUploadingProfileDetails,
} from './actionCreators';
import { createApiUserUri } from '../../constants/api';
import { dismissStatusMessage } from '../shared/actionCreators';
import { DETAILS_FORM_NAME } from '../../constants/formNames';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    MILISECONDS_TO_AUTO_DISMISS_MESSAGE,
    FAILED_UPDATE_PROFILE_DETAILS_MESSAGE,
    SUCCESS_UPDATE_DETAILS_MESSAGE
} from '../../constants/uiConstants';

export const uploadUserDetailsFactory = ({fetchRequest, convertFromServerDetails, convertToServerDetails}) => (details) =>
    async (dispatch, getState) => {
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(getState().shared.email);
        const serverDetails = convertToServerDetails(details);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchRequest(requestUri, authToken, serverDetails);
                const updatedDetails = convertFromServerDetails(receivedServerDetails);
                dispatch(updateProfileDetails(updatedDetails));
                const dispatchedAction = dispatch(successUploadingProfileDetails(SUCCESS_UPDATE_DETAILS_MESSAGE));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            });
        } catch (error) {
            if (error.statusCode !== 401) {
                const dispatchedAction = dispatch(failUploadingProfileDetails(FAILED_UPDATE_PROFILE_DETAILS_MESSAGE, error));
                setTimeout(() => dispatch(dismissStatusMessage(dispatchedAction.payload.statusMessage.id)), MILISECONDS_TO_AUTO_DISMISS_MESSAGE);
            }
        } finally {
            dispatch(stopSubmit(DETAILS_FORM_NAME));
        }
    };