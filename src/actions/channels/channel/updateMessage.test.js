import {
    updateMessage as updateMessageAC,
    startUpdatingMessage,
} from './actionCreators';
import {
    editMessageVote,
    updateMessageFactory
} from './updateMessage';
import {
    DOWN,
    UP
} from '../../../constants/common';

describe('test for updating message actions', () => {
    test('updateMessage dispatches actions in correct order', async done => {
        const dispatch = jest.fn();
        const addAvatarUriToMessage = jest.fn((data) => data);
        const channelId = 'abc';
        const message = {
            id: 'abc',
            message: 'Test',
            vote: 1,
            votes: []
        };
        const getState = () => ({
            shared: {
                token: 'valid token'
            }
        });

        const convertToServerMessageUpdate = (message) => ({
            value: message.value,
            customData: message.vote
        });
        const convertFromServerMessage = (serverResponse) => serverResponse;

        const updateMessage = updateMessageFactory({
            fetchUpdateMessage: () => Promise.resolve(message),
            addAvatarUriToMessage,
            convertToServerMessageUpdate,
            convertFromServerMessage
        });
        const dispatchable = updateMessage(channelId, message);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUpdatingMessage(message.id));
        expect(dispatch.mock.calls[1][0]).toEqual(updateMessageAC(message));
        done();
    });

    describe('test for function editMessageVote', () => {
        test('test editMessageVote user not voted yet - vote up', () => {
            const email = 'test@test.cz';
            const type = UP;
            const message = {
                id: 'abc',
                message: 'test',
                vote: 1,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: 2,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    },
                    {
                        email: 'test@test.cz',
                        type: UP
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });

        test('test editMessageVote user not voted yet - vote down', () => {
            const email = 'test@test.cz';
            const type = DOWN;
            const message = {
                id: 'abc',
                message: 'test',
                vote: 1,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: 0,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    },
                    {
                        email: 'test@test.cz',
                        type: DOWN
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });

        test('test editMessageVote user already vote - up -> remove vote', () => {
            const email = 'test@test.cz';
            const type = UP;
            const message = {
                id: 'abc',
                message: 'test',
                vote: 2,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    },
                    {
                        email: 'test@test.cz',
                        type: UP
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: 1,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });

        test('test editMessageVote user already vote - down -> remove vote', () => {
            const email = 'zk@zk.cz';
            const type = DOWN;
            const message = {
                id: 'abc',
                message: 'test',
                vote: 0,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: DOWN
                    },
                    {
                        email: 'test@test.cz',
                        type: UP
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: 1,
                votes: [
                    {
                        email: 'test@test.cz',
                        type: UP
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });

        test('test editMessageVote user already vote - DOWN -> but now vote UP', () => {
            const email = 'test@test.cz';
            const type = UP;
            const message = {
                id: 'abc',
                message: 'test',
                vote: -2,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: DOWN
                    },
                    {
                        email: 'test@test.cz',
                        type: DOWN
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: 0,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: DOWN
                    },
                    {
                        email: 'test@test.cz',
                        type: UP
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });

        test('test editMessageVote user already vote - UP -> but now vote DOWN', () => {
            const email = 'zk@zk.cz';
            const type = DOWN;
            const message = {
                id: 'abc',
                message: 'test',
                vote: 0,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: UP
                    },
                    {
                        email: 'test@test.cz',
                        type: DOWN
                    }
                ]
            };
            const expectedMessage = {
                id: 'abc',
                message: 'test',
                vote: -2,
                votes: [
                    {
                        email: 'zk@zk.cz',
                        type: DOWN
                    },
                    {
                        email: 'test@test.cz',
                        type: DOWN
                    }
                ]
            };
            expect(editMessageVote(message, type, email)).toEqual(expectedMessage);
        });
    });
});