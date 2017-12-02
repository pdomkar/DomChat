import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { ChannelList } from '../../../containers/app/channels/ChannelList';
import { fetchChannels } from '../../../actions/channels/fetchChannels';


const mapStateToProps = (state, ownProps) => {console.log(state.channelApp.channels); return{
    channels: ownProps.channels,
    email: state.shared.email,
    selectedChannel: ownProps.selectedChannel,
};};

const mapDispatchToProps = dispatch => ({
    loadChannels: () => dispatch(fetchChannels()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelList);

connectedComponent.propTypes = {
    channels: PropTypes.instanceOf(List).isRequired,
    selectedChannel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    })
};


export { connectedComponent as ChannelListRedux };