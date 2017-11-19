import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChannelListEditedItem } from '../../../containers/channels/channel-list/ChannelListEditedItem';
import {
    cancelEditingChannel,
} from '../../../actions/channels/channel-list/actionCreators';
import { CHANNEL_EDIT_FORM_NAME } from '../../../constants/formNames';
import { reduxForm } from 'redux-form';
import { uploadUpdatedChannel } from '../../../actions/channels/channel-list/uploadUpdatedChannel';


const mapStateToProps = (state, ownProps) => ({
    submitButtonText: ownProps.submitButtonText,
    channel: ownProps.channel,
    initialValues: ownProps.channel
});


const mapDispatchToProps = dispatch => ({
    onSubmit: (channel) => dispatch(uploadUpdatedChannel(channel)),
    onCancel: () => dispatch(cancelEditingChannel()),
});


const formConfig = {
    form: CHANNEL_EDIT_FORM_NAME,
    touchOnChange: true,
    enableReinitialize: true,
};

const stateEnhancer = connect(mapStateToProps,  mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(ChannelListEditedItem));

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    submitButtonText: PropTypes.string.isRequired,
};

export { connectedComponent as ChannelListEditedItemRedux };