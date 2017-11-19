import { connect } from 'react-redux';
import {uuid} from '../../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../../containers/channels/channel-list/ChannelListEditedItem';
import {
    cancelCreatingChannel,
} from '../../../actions/channels/channel-list/actionCreators';
import { CHANNEL_NEW_FORM_NAME } from '../../../constants/formNames';
import { reduxForm } from 'redux-form';
import { uploadChannel } from '../../../actions/channels/channel-list/uploadChannel';


const mapStateToProps = () => ({
    submitButtonText: 'Create',
    channel: {
        id: uuid(),
        name: '',
    }
});

const mapDispatchToProps = dispatch => ({
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