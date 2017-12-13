import {
    convertFromServerChannels,
    fetchReceive
} from '../shared/index';
import { fetchChannelsFactory } from './fetchChannels';
import { uploadUpdatedChannelFactory } from './uploadUpdatedChannel';
import { uploadChannelFactory } from './uploadChannel';
import { deleteChannelFactory } from './deleteChannel';

export const fetchChannels = fetchChannelsFactory(fetchReceive, convertFromServerChannels);
export const uploadUpdatedChannel = uploadUpdatedChannelFactory(fetchChannels);
export const uploadChannel = uploadChannelFactory(fetchChannels);
export const deleteChannel = deleteChannelFactory(fetchChannels);