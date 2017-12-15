import {
    receiveValidEmail,
    receiveValidToken,
    startAuthentication,
} from './actionCreators';
import { push } from 'connected-react-router';

import { authenticateUserFactory } from './authenticateUser';

test('authenticateUser dispatches actions in correct order', async done => {
    const dispatch = jest.fn();

    const destinationLocation = '/channels';
    const email = 'test@test.cz';
    const token = 'valid token';
    const authenticateUser = authenticateUserFactory({
        fetchCreateUser: () => Promise.resolve({email: email}),
        fetchAuthToken: () => Promise.resolve(token),
    });
    const dispatchable = authenticateUser(destinationLocation, email);
    await dispatchable(dispatch);

    expect(dispatch).toHaveBeenCalledWith(startAuthentication());
    expect(dispatch.mock.calls[1][0]).toEqual(receiveValidEmail(email));
    expect(dispatch.mock.calls[2][0]).toEqual(receiveValidToken(token));
    expect(dispatch.mock.calls[3][0]).toEqual(push(destinationLocation));
    done();
});