import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../../containers/channels/channel-list/ChannelList';
import {
    startEditingChannel,
    startCreatingChannel,
    deleteChannel
} from '../../../actions/channels/channel-list/actionCreators';
import { saveItems } from '../../../actions/channels/channel-list/saveItems';

const getListOfChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
const getListOfChannelsMemoized = memoizee(getListOfChannels);

const mapStateToProps = state => ({
    list: getListOfChannelsMemoized(state.channelApp.channels),
    editedChannelId: state.channelApp.editedChannelId,
    createChannelVisible: state.channelApp.createChannelVisible

});

const mapDispatchToProps = dispatch => ({
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onStartCreating: () => dispatch(startCreatingChannel()),
    onDelete: (id) => dispatch(deleteChannel(id)),
    save: () => dispatch(saveItems()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

export { connectedComponent as ChannelListRedux };