import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import { uploadUserDetailsFactory } from './uploadUserDetails';
import { DETAILS_FORM_NAME } from '../../constants/formNames';
import {
    updateProfileDetails
} from './actionCreators';

test('uploadUserDetails dispatches actions in correct order', async done => {
    const dispatch = jest.fn(action => action);
    const expectedAvatarId = 'abc';


    const getState = () => ({
        shared: {
            token: 'token valid',
            email: 'test@test.cz'
        }
    });

    const convertFromServerDetails = (serverDetails) => ({
        ...JSON.parse(serverDetails.customData || '{}'),
        email: serverDetails.email,
    });

    const convertToServerDetails = (serverDetails) => JSON.stringify({
        ...serverDetails,
        email: undefined,
    });

    const servedDetails = {
        email: 'on@the.phone',
        customData: `{ "avatarId": "${expectedAvatarId}" }`,
    };
    const expectedDetails = {
        email: servedDetails.email,
        ...JSON.parse(servedDetails.customData),
    };

    const uploadUserDetails = uploadUserDetailsFactory({
        fetchRequest: () => Promise.resolve(servedDetails),
        convertFromServerDetails,
        convertToServerDetails
    });
    const dispatchable = uploadUserDetails(expectedDetails);
    await dispatchable(dispatch, getState);

    // toHaveBeenCalledWith cannot be used since order matters
    expect(dispatch.mock.calls[0][0]).toEqual(startSubmit(DETAILS_FORM_NAME));
    expect(dispatch.mock.calls[1][0]).toEqual(updateProfileDetails(expectedDetails));
    expect(dispatch).toHaveBeenLastCalledWith(stopSubmit(DETAILS_FORM_NAME));
    done();
});