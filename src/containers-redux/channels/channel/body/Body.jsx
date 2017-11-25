import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Body } from '../../../../components/channels/channel/body/Body';
import { CHANNEL_SEND_MESSAGE_NAME } from '../../../../constants/formNames';
import { reduxForm } from 'redux-form';
import { uploadMessage } from '../../../../actions/channels/channel/uploadMessage';
import { fetchMessages } from '../../../../actions/channels/channel/fetchMessages';
import { removeMessage } from '../../../../actions/channels/channel/removeMessage';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    messages: state.channelApp.channel.messages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadMessages: (channelId) => dispatch(fetchMessages(channelId)),
    onRemove: (channelId, messageId) => dispatch(removeMessage(channelId, messageId)),
    onSubmit: (message) => {console.log("sdfsdffsfsf", ownProps.channel.id);return dispatch(uploadMessage(message, ownProps.channel.id))},
});

const formConfig = {
    form: CHANNEL_SEND_MESSAGE_NAME,
    touchOnChange: true,
    enableReinitialize: true,
};

const stateEnhancer = connect(mapStateToProps,  mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(Body));

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
    }).isRequired,
};

export { connectedComponent as Body };