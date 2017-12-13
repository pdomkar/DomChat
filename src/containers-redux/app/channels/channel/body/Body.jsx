import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Body } from '../../../../../components/app/channels/channel/body/Body';
import { CHANNEL_SEND_MESSAGE_NAME } from '../../../../../constants/formNames';
import { uploadMessage, updateMessage, fetchMessages } from '../../../../../actions/channels/channel';
import { deleteMessage } from '../../../../../actions/channels/channel/deleteMessage';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    messages: state.channelApp.channel.messages,
    email: state.shared.email,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadMessages: (channelId) => dispatch(fetchMessages(channelId)),
    onDelete: (channelId, messageId) => dispatch(deleteMessage(channelId, messageId)),
    onVote: (message) => dispatch(updateMessage(ownProps.channel.id, message)),
    onSubmit: (message) => dispatch(uploadMessage(message, ownProps.channel.id)),
});

const formConfig = {
    form: CHANNEL_SEND_MESSAGE_NAME,
    touchOnChange: true,
    enableReinitialize: true,
};

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(Body));

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
};

export { connectedComponent as Body };