import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChannelListEditedItem } from '../../containers/channels/ChannelListEditedItem';
import {
    cancelEditingChannel,
} from '../../actions/channels/actionCreators';
import { CHANNEL_EDIT_FORM_NAME } from '../../constants/formNames';
import { reduxForm } from 'redux-form';
import { uploadUpdatedChannel } from '../../actions/channels/uploadUpdatedChannel';
import { convertFromServerChannel } from '../../utils/api/conversions/channel';
import { fetchUsers } from '../../actions/shared/fetchUsers';


const mapStateToProps = (state, ownProps) => {console.log(ownProps.channel); return ({
    submitButtonText: ownProps.submitButtonText,
    channel: ownProps.channel,
    users: state.shared.users,
    initialValues: ownProps.channel
})};


const mapDispatchToProps = dispatch => ({
    onFetchUsers: () => dispatch(fetchUsers()),
    onSubmit: (channel) => {console.log("sdfsdffsfsf");return dispatch(uploadUpdatedChannel(channel))},
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
    }).isRequired,
    submitButtonText: PropTypes.string.isRequired,
};

export { connectedComponent as ChannelListEditedItemRedux };