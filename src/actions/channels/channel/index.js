import { fetchReceive } from '../../shared/index';
import { fetchMessagesFactory } from './fetchMessages';
import { addAvatarUriToMessageFactory } from './addAvatarUriToMessage';
import { updateMessageFactory } from './updateMessage';
import { uploadMessageFactory } from './uploadMessage';

export const addAvatarUriToMessage = addAvatarUriToMessageFactory(fetchReceive);
export const fetchMessages = fetchMessagesFactory({fetchReceive, addAvatarUriToMessage});
export const updateMessage = updateMessageFactory(addAvatarUriToMessage);
export const uploadMessage = uploadMessageFactory(addAvatarUriToMessage);