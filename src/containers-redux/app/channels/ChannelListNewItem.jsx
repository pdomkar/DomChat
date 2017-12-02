import { connect } from 'react-redux';
import {uuid} from '../../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../../containers/app/channels/channel/ChannelListEditedItem';
import {
    cancelCreatingChannel,
} from '../../../actions/channels/actionCreators';
import { CHANNEL_NEW_FORM_NAME } from '../../../constants/formNames';
import { reduxForm } from 'redux-form';
import { uploadChannel } from '../../../actions/channels/uploadChannel';
import { fetchUsers } from '../../../actions/shared/fetchUsers';


const mapStateToProps = (state) => ({
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
    onSubmit: (channel) => dispatch(uploadChannel(channel)),
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