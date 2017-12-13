import { fetchUserAvatarFactory } from './fetchUserAvatar';
import { fetchUserDetailsFactory } from './fetchUserDetails';
import { uploadUserAvatarFactory } from './uploadUserAvatar';
import { fetchProfileViewFactory } from './fetchProfileView';
import {
    convertFromServerDetails,
    fetchReceive
} from '../shared/index';

export const fetchUserAvatar = fetchUserAvatarFactory(fetchReceive);
export const fetchUserDetails = fetchUserDetailsFactory({ fetchReceive, fetchUserAvatar, convertFromServerDetails});
export const uploadUserAvatar = uploadUserAvatarFactory(fetchUserAvatar);
export const fetchProfileView = fetchProfileViewFactory(fetchReceive, convertFromServerDetails);