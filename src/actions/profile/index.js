import { fetchUserAvatarFactory } from './fetchUserAvatar';
import { fetchUserDetailsFactory } from './fetchUserDetails';
import { uploadUserAvatarFactory } from './uploadUserAvatar';
import { fetchProfileViewFactory } from './fetchProfileView';
import {
    fetchFileUpload,
    fetchReceive,
    fetchRequest
} from '../shared/index';
import { uploadUserDetailsFactory } from './uploadUserDetails';
import {
    convertFromServerDetails,
    convertToServerDetails
} from '../../utils/api/conversions/profileDetails';

export const fetchUserAvatar = fetchUserAvatarFactory(fetchReceive);
export const fetchUserDetails = fetchUserDetailsFactory({ fetchReceive, fetchUserAvatar, convertFromServerDetails});
export const uploadUserDetails = uploadUserDetailsFactory({fetchRequest, convertFromServerDetails, convertToServerDetails});
export const uploadUserAvatar = uploadUserAvatarFactory({fetchFileUpload, fetchUserAvatar, uploadUserDetails});
export const fetchProfileView = fetchProfileViewFactory(fetchReceive, convertFromServerDetails);