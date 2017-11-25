import { connect } from 'react-redux';

import { ChannelsLayout } from '../../components/channels/ChannelsLayout';

const mapStateToProps = (state, ownProps) => {console.log("aaaaaaaa", ownProps.computedMatch.params.id); console.log("bbb", state.channelApp.channels.first()); return ({
    details: state.profile.details,
    channelId: ownProps.computedMatch.params.id || (state.channelApp.channels.first() && state.channelApp.channels.first().id) ,
    list: state.channelApp.channels,
})};

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(ChannelsLayout);

export { connectedComponent as ChannelsLayout };