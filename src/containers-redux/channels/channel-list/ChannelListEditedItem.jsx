import { connect } from 'react-redux';
import { ChannelListEditedItem } from '../../../containers/channels/channel-list/ChannelListEditedItem';
import {
    updateChannel,
    cancelEditingChannel,
} from '../../../actions/channels/channel-list/actionCreators';


const mapDispatchToProps = dispatch => ({
    onSubmit: (channel) => dispatch(updateChannel(channel)),
    onCancel: () => dispatch(cancelEditingChannel()),
});

const connectedComponent = connect(undefined,  mapDispatchToProps)(ChannelListEditedItem);

export { connectedComponent as ChannelListEditedItemRedux };