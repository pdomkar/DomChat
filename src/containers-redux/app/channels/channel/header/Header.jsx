import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header } from '../../../../../components/app/channels/channel/header/Header';
import { startEditingChannel} from '../../../../../actions/channels/actionCreators';
import { deleteChannel } from '../../../../../actions/channels';

const mapStateToProps = (state, ownProps) => { return ({
    channel: ownProps.channel,
    email: state.shared.email,
    editedChannelId: state.channelApp.editedChannelId,
});};

const mapDispatchToProps = (dispatch) => ({
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onDelete: (id) => dispatch(deleteChannel(id)),
});


const stateEnhancer = connect(mapStateToProps,  mapDispatchToProps);
const connectedComponent = stateEnhancer(Header);

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
};

export { connectedComponent as Header };