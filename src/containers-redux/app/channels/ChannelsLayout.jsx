import { connect } from 'react-redux';

import { ChannelsLayout } from '../../../components/app/channels/ChannelsLayout';
import { fetchUserDetails } from '../../../actions/profile/fetchUserDetails';
import { logoutUser } from '../../../actions/shared/logoutUser';
import { startCreatingChannel } from '../../../actions/channels/actionCreators';

const mapStateToProps = (state, ownProps) => {
    const filteredChannels = state.channelApp.channels.filter(channel => state.shared.email === channel.createdBy || channel.users.indexOf(state.shared.email) !== -1);
    return ({
        details: state.profile.details,
        channelId: ownProps.computedMatch.params.id || (filteredChannels.first() && filteredChannels.first().id) ,
        channels: state.channelApp.channels,
        createChannelVisible: state.channelApp.createChannelVisible,
    });};

const mapDispatchToProps = (dispatch) => ({
    fetchDetails: () => dispatch(fetchUserDetails()),
    onLogOut: () => dispatch(logoutUser()),
    onStartCreating: () => dispatch(startCreatingChannel()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelsLayout);

export { connectedComponent as ChannelsLayout };