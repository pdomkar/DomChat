import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChannelLayout } from '../../../../components/app/channels/channel/ChannelLayout';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
});

const mapDispatchToProps = () => ({
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelLayout);

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
};

export { connectedComponent as ChannelLayout };