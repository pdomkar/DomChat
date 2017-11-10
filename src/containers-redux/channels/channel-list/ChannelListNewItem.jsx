import { connect } from 'react-redux';
import {uuid} from '../../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../../containers/channels/channel-list/ChannelListEditedItem';
import {
    createChannel,
    cancelCreatingChannel,
} from '../../../actions/channels/channel-list/actionCreators';


const mapStateToProps = () => ({
    submitButtonText: 'Create',
    channel: {
        id: uuid(),
        name: '',
    }
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (newChannel) => dispatch(createChannel(newChannel)),
    onCancel: () => dispatch(cancelCreatingChannel()),
});

const connectedComponent = connect(mapStateToProps,  mapDispatchToProps)(ChannelListEditedItem);

export { connectedComponent as ChannelListNewItemRedux };