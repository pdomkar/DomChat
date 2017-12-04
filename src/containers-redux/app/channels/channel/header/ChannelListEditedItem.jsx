import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { ChannelListEditedItem } from '../../../../../containers/app/channels/channel/ChannelListEditedItem';
import { cancelEditingChannel } from '../../../../../actions/channels/actionCreators';
import { CHANNEL_EDIT_FORM_NAME } from '../../../../../constants/formNames';
import { uploadUpdatedChannel } from '../../../../../actions/channels/uploadUpdatedChannel';
import { fetchUsers } from '../../../../../actions/shared/fetchUsers';
import { MODAL_COMPONENT_EDIT } from '../../../../../constants/common';


const mapStateToProps = (state, ownProps) => {console.log('channel', MODAL_COMPONENT_EDIT); return ({
    typeComponent: MODAL_COMPONENT_EDIT,
    submitButtonText: ownProps.submitButtonText,
    channel: ownProps.channel,
    users: state.shared.users,
    email: state.shared.email,
    initialValues: ownProps.channel
});};


const mapDispatchToProps = dispatch => ({
    onFetchUsers: () => dispatch(fetchUsers()),
    onSubmit: (channel) => {console.log('wwwwwwwwwww');return dispatch(uploadUpdatedChannel(channel));},
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
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdBy: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
    submitButtonText: PropTypes.string.isRequired,
};

export { connectedComponent as ChannelListEditedItemRedux };