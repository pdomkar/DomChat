import {
    fetchPatch,
    fetchReceive
} from '../shared/index';
import { fetchChannelsFactory } from './fetchChannels';
import { uploadUpdatedChannelFactory } from './uploadUpdatedChannel';
import { uploadChannelFactory } from './uploadChannel';
import { deleteChannelFactory } from './deleteChannel';
import {
    convertFromServerChannelCreate,
    convertFromServerChannels,
    convertFromServerChannelUpdate,
    convertToServerChannelCreate,
    convertToServerChannelRemove,
    convertToServerChannelUpdate,
} from '../../utils/api/conversions/channel';

export const fetchChannels = fetchChannelsFactory(fetchReceive, convertFromServerChannels);
export const uploadUpdatedChannel = uploadUpdatedChannelFactory({fetchPatch, fetchChannels, convertToServerChannelUpdate, convertFromServerChannelUpdate});
export const uploadChannel = uploadChannelFactory({fetchPatch, fetchChannels, convertToServerChannelCreate, convertFromServerChannelCreate});
export const deleteChannel = deleteChannelFactory({fetchPatch, fetchChannels, convertToServerChannelRemove});