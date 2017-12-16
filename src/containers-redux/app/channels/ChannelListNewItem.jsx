import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { uuid } from '../../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../../containers/app/channels/channel/ChannelListEditedItem';
import { cancelCreatingChannel } from '../../../actions/channels/actionCreators';
import { CHANNEL_NEW_FORM_NAME } from '../../../constants/formNames';
import { uploadChannel } from '../../../actions/channels';
import { fetchUsers } from '../../../actions/shared';
import { MODAL_COMPONENT_CREATE } from '../../../constants/common';


const mapStateToProps = (state) => ({
    typeComponent: MODAL_COMPONENT_CREATE,
    submitButtonText: 'Create',
    channel: {
        id: uuid(),
        name: '',
        description: '',
        users: []
    },
    email: state.shared.email,
    users: state.shared.users,
});

const mapDispatchToProps = dispatch => ({
    onFetchUsers: () => dispatch(fetchUsers()),
    onSubmit: (channel) => dispatch(uploadChannel(channel, history)),
    onCancel: () => dispatch(cancelCreatingChannel()),
});

const formConfig = {
    form: CHANNEL_NEW_FORM_NAME,
    touchOnChange: true,
    enableReinitialize: true,
};

const stateEnhancer = connect(mapStateToProps,  mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(ChannelListEditedItem));

export { connectedComponent as ChannelListNewItemRedux };