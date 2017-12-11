import {
    createChannel,
    deleteChannel,
    updateChannel,
    updateChannels,
} from '../../actions/channels/actionCreators';
import { channels } from './channels';
import { List } from 'immutable';

describe('channels reducer', () => {
    const channel1 = {id: '1bc8f1c9-ebae-4591-b2fe-402b2c700d99', name: "test"};
    const channel2 = {id: '72869f50-dd7f-49e1-a7d3-bd19cef2df69', name: 'testNew'};
    test('loaded all channels ', () => {
        const channelsArr = [channel1];
        const newState = channels(List(), updateChannels(channelsArr));
        expect(newState).toEqual(List(channelsArr));
    });

    test('create channel ', () => {
        const channelsArr = [channel1];
        const expectedChannelsArr = [...channelsArr, ...[channel2]];
        const newState = channels(List(channelsArr), createChannel(channel2));
        expect(newState).toEqual(List(expectedChannelsArr));
    });

    test('updated channel ', () => {
        const channelsArr = [channel1, channel2];
        const updChannel = {...channel2, name: 'testUpdate'};
        const expectedChannelsArr = [channel1, updChannel];
        const newState = channels(List(channelsArr), updateChannel(updChannel));
        expect(newState).toEqual(List(expectedChannelsArr));
    });

    test('delete channel ', () => {
        const channelsArr = [channel1, channel2];
        const expectedChannelsArr = [channel1];
        const newState = channels(List(channelsArr), deleteChannel(channel2.id));
        expect(newState).toEqual(List(expectedChannelsArr));
    });

    test('delete not exist channel ', () => {
        const channelsArrExpected = [channel1, channel2];
        const newState = channels(List(channelsArrExpected), deleteChannel('sdfsdf'));
        expect(newState).toEqual(List(channelsArrExpected));
    });

});