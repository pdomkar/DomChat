import { connect } from 'react-redux';

import { ChannelsLayout } from '../../components/channels/ChannelsLayout';
import { fetchUserDetails } from '../../actions/profile/fetchUserDetails';

const mapStateToProps = (state, ownProps) => {
    console.log("aaaaaaaa", ownProps.computedMatch.params.id);
    console.log("bbb", state.channelApp.channels.first());
    const filteredChannels = state.channelApp.channels.filter(channel => state.shared.email === channel.createdBy || channel.users.indexOf(state.shared.email) !== -1);
    return ({
        details: state.profile.details,
        channelId: ownProps.computedMatch.params.id || (filteredChannels.first() && filteredChannels.first().id) ,
        list: state.channelApp.channels,
    })};

const mapDispatchToProps = (dispatch) => ({
    fetchDetails: () => dispatch(fetchUserDetails())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelsLayout);

export { connectedComponent as ChannelsLayout };