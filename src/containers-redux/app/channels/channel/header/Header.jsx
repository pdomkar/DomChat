import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../../../../../components/app/channels/channel/header/Header';
import { removeChannel } from '../../../../../actions/channels/removeChannel';
import { startEditingChannel } from '../../../../../actions/channels/actionCreators';

const mapStateToProps = (state, ownProps) => {console.log(state.channelApp); return ({
    channel: ownProps.channel,
    email: state.shared.email,
    editedChannelId: state.channelApp.editedChannelId,
});};

const mapDispatchToProps = (dispatch) => ({
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onDelete: (id) => dispatch(removeChannel(id)),
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