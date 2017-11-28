import { connect } from 'react-redux';
import { ChannelList } from '../../containers/channels/ChannelList';
import {
    startCreatingChannel
} from '../../actions/channels/actionCreators';
import { saveItems } from '../../actions/channels/saveItems';
import { fetchChannels } from '../../actions/channels/fetchChannels';


const mapStateToProps = (state, ownProps) => {console.log(state.channelApp.channels); return{
    list: ownProps.list,
    email: state.shared.email,
    createChannelVisible: state.channelApp.createChannelVisible

};};

const mapDispatchToProps = dispatch => ({
    loadChannels: () => dispatch(fetchChannels()),
    onStartCreating: () => dispatch(startCreatingChannel()),
    save: () => dispatch(saveItems()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

export { connectedComponent as ChannelListRedux };