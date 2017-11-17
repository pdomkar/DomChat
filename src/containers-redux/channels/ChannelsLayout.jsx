import { connect } from 'react-redux';

import { ChannelsLayout } from '../../components/channels/ChannelsLayout';

const mapStateToProps = (state) => ({
    details: state.profile.details,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(ChannelsLayout);

export { connectedComponent as ChannelsLayout };