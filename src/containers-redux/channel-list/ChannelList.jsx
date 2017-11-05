import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../containers/channel-list/ChannelList';
import {
    startEditingChannel,
    startCreatingChannel,
} from '../../actions/channel-list/actionCreators';
import { saveItems } from '../../actions/channel-list/saveItems';

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
    save: () => dispatch(saveItems()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

export { connectedComponent as ChannelListRedux };