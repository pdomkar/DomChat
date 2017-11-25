import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChannelLayout } from '../../../components/channels/channel/ChannelLayout';
import { removeChannel } from '../../../actions/channels/removeChannel';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
});

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(removeChannel(id)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelLayout);

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
    }).isRequired,
};

export { connectedComponent as ChannelLayout };