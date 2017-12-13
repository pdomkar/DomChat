import {
    startFetchingProfileView,
    updateProfileView
} from './actionCreators';
import { fetchProfileViewFactory } from './fetchProfileView';

test('fetchProfileView dispatches actions in correct order', async done => {
    const expectedUri = 'http://blob/avatar.png';
    const expectedEmail = 'test@test.cz';
    const firstResponse = {email: expectedEmail, avatarId: 'abc'};
    const expectedParam = {email: expectedEmail, avatarUri: expectedUri};
    const dispatch = jest.fn();
    const fetchReceive = jest.fn();
    fetchReceive.mockReturnValueOnce(Promise.resolve(firstResponse));
    fetchReceive.mockReturnValue(expectedUri);
    const convertFromServerDetails = (data) => data;
    const getState = () => ({
        shared: {
            token: 'valid token'
        }
    });


    const fetchProfileView = fetchProfileViewFactory(fetchReceive, convertFromServerDetails);
    const dispatchable = fetchProfileView(expectedEmail);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileView());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileView(expectedParam));
    done();
});