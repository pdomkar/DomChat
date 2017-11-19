import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../../containers/channels/channel-list/ChannelList';
import {
    startEditingChannel,
    startCreatingChannel
} from '../../../actions/channels/channel-list/actionCreators';
import { saveItems } from '../../../actions/channels/channel-list/saveItems';
import { removeChannel } from '../../../actions/channels/channel-list/removeChannel';
import { fetchChannels } from '../../../actions/channels/channel-list/fetchChannels';

// const getListOfChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
// const getListOfChannelsMemoized = memoizee(getListOfChannels);

const mapStateToProps = state => {console.log(state.channelApp.channels); return{
    list: state.channelApp.channels,
    editedChannelId: state.channelApp.editedChannelId,
    createChannelVisible: state.channelApp.createChannelVisible

};}

const mapDispatchToProps = dispatch => ({
    loadChannels: () => dispatch(fetchChannels()),
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onStartCreating: () => dispatch(startCreatingChannel()),
    onDelete: (id) => dispatch(removeChannel(id)),
    save: () => dispatch(saveItems()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

export { connectedComponent as ChannelListRedux };