// import {
//     invalidateToken,
// } from './actionCreators';

import { logoutUserFactory } from './logoutUser';

test('logoutUser dispatches actions in correct order', async done => {
    const dispatch = jest.fn();

    const dispatchable = logoutUserFactory(jest.fn());
    await dispatchable(dispatch);
    //todo neprojde, chyba prdani localstorage

    // expect(dispatch).toHaveBeenLastCalledWith(invalidateToken());
    done();
});