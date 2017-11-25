import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../containers/channels/ChannelList';
import {
    startEditingChannel,
    startCreatingChannel
} from '../../actions/channels/actionCreators';
import { saveItems } from '../../actions/channels/saveItems';
import { removeChannel } from '../../actions/channels/removeChannel';
import { fetchChannels } from '../../actions/channels/fetchChannels';

// const getListOfChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
// const getListOfChannelsMemoized = memoizee(getListOfChannels);

const mapStateToProps = (state, ownProps) => {console.log(state.channelApp.channels); return{
    list: ownProps.list,
    email: state.shared.email,
    editedChannelId: state.channelApp.editedChannelId,
    createChannelVisible: state.channelApp.createChannelVisible

};};

const mapDispatchToProps = dispatch => ({
    loadChannels: () => dispatch(fetchChannels()),
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onStartCreating: () => dispatch(startCreatingChannel()),
    onDelete: (id) => dispatch(removeChannel(id)),
    save: () => dispatch(saveItems()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

export { connectedComponent as ChannelListRedux };