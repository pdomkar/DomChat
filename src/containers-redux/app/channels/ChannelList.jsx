import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { ChannelList} from '../../../components/app/channels/ChannelList';
import { fetchChannels } from '../../../actions/channels';

const mapStateToProps = (state, ownProps) => { return{
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