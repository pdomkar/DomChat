import { addAvatarUriToMessageFactory } from './addAvatarUriToMessage';

test('addAvatarUriToMessage dispatches actions in correct order', async () => {
    const customData = {avatarId: 'abc', name: 'test'};
    const firstResponse = {
        customData: JSON.stringify(customData)
    };
    const expectedUri = 'https://avatar.com/slfd';
    const fetchReceive = jest.fn(() => 'default');
    fetchReceive.mockImplementationOnce(() => Promise.resolve(firstResponse));
    fetchReceive.mockImplementationOnce(() => expectedUri);
    const message = {message: 'Test'};
    const authToken = 'valid token';

    const expectedResult = {...message, name: customData.name, avatarUri: expectedUri};
    const addAvatarUriToMessage = addAvatarUriToMessageFactory(
        fetchReceive
    );

    const result = await addAvatarUriToMessage(message, authToken);
    expect(result).toEqual(expectedResult)

});