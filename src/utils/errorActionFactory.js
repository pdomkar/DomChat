import { uuid } from './uuidGenerator';

export const errorActionFactory = (actionType) =>
    (errorMessage, error) => ({
        type: actionType,
        payload: {
            error: {
                id: uuid(),
                message: errorMessage,
                statusText: error.statusText,
                statusCode: error.statusCode
            }
        }
    });