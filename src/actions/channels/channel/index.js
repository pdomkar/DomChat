import {
    fetchCreateMessage,
    fetchDelete,
    fetchReceive,
    fetchUpdateMessage
} from '../../shared/index';
import { fetchMessagesFactory } from './fetchMessages';
import { addAvatarUriToMessageFactory } from './addAvatarUriToMessage';
import { updateMessageFactory } from './updateMessage';
import { uploadMessageFactory } from './uploadMessage';
import {
    convertFromServerMessage,
    convertFromServerMessages,
    convertToServerMessageCreate,
    convertToServerMessageUpdate
} from '../../../utils/api/conversions/message';
import { deleteMessageFactory } from './deleteMessage';

export const addAvatarUriToMessage = addAvatarUriToMessageFactory(fetchReceive);
export const fetchMessages = fetchMessagesFactory({fetchReceive, addAvatarUriToMessage, convertFromServerMessages});
export const updateMessage = updateMessageFactory({fetchUpdateMessage, addAvatarUriToMessage, convertToServerMessageUpdate, convertFromServerMessage});
export const uploadMessage = uploadMessageFactory({fetchCreateMessage, addAvatarUriToMessage, convertToServerMessageCreate, convertFromServerMessage});
export const deleteMessage = deleteMessageFactory(fetchDelete);