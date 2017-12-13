import { fetchReceiveFactory } from '../../utils/api/fetchReceive';
import { fetchUsersFactory } from './fetchUsers';
import { convertFromServerChannelsFactory } from '../../utils/api/conversions/channel';
import { convertFromServerDetailsFactory } from '../../utils/api/conversions/profileDetails';
import { logoutUserFactory } from './logoutUser';

export const fetchReceive = fetchReceiveFactory(fetch);
export const fetchUsers = fetchUsersFactory(fetchReceive);
export const logoutUser = logoutUserFactory(localStorage.removeItem);
export const convertFromServerChannels = convertFromServerChannelsFactory;
export const convertFromServerDetails = convertFromServerDetailsFactory;