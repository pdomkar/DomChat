import { uuid } from './uuidGenerator';

export const statusMessageActionFactory = (actionType) =>
    (message, error = {}) => ({
        type: actionType,
        payload: {
            statusMessage: {
                id: uuid(),
                text: message,
                error: {
                    statusText: error.statusText,
                    statusCode: error.statusCode
                }
            }
        }
    });