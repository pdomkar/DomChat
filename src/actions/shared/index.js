import { fetchReceiveFactory } from '../../utils/api/fetchReceive';
import { fetchUsersFactory } from './fetchUsers';

import { logoutUserFactory } from './logoutUser';
import { fetchRequestFactory } from '../../utils/api/fetchRequest';
import { fetchFileUploadFactory } from '../../utils/api/fetchFileUpload';
import { fetchPatchFactory } from '../../utils/api/fetchPatch';
import { fetchDeleteFactory } from '../../utils/api/fetchDelete';
import { fetchCreateMessageFactory } from '../../utils/api/fetchCreateMessage';
import { fetchUpdateMessageFactory } from '../../utils/api/fetchUpdateMessage';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import { fetchCreateUser } from '../../utils/api/fetchCreateUser';
import { authenticateUserFactory } from './authenticateUser';

export const fetchReceive = fetchReceiveFactory(fetch);
export const fetchRequest = fetchRequestFactory(fetch);
export const fetchPatch = fetchPatchFactory(fetch);
export const fetchDelete = fetchDeleteFactory(fetch);
export const fetchCreateMessage = fetchCreateMessageFactory(fetch);
export const fetchUpdateMessage = fetchUpdateMessageFactory(fetch);
export const fetchFileUpload = fetchFileUploadFactory(fetch);
export const authenticateUser = authenticateUserFactory({fetchCreateUser, fetchAuthToken});
export const fetchUsers = fetchUsersFactory(fetchReceive);
export const logoutUser = logoutUserFactory();