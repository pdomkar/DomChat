import { connect } from 'react-redux';
import { StatusMessages } from '../../components/shared/StatusMessages.jsx';
import memoizee from 'memoizee';
import { dismissStatusMessage } from '../../actions/shared/actionCreators';

const flattenStatusMmessages = statusMessages => statusMessages.valueSeq().toArray();
const flattenStatusMessagesMemoized = memoizee(flattenStatusMmessages);

const mapStateToProps = (state) => ({
    statusMessages: flattenStatusMessagesMemoized(state.shared.statusMessages),
});

const mapDispatchToProps = (dispatch) => ({
    onDismissClick: (statusMessageId) => dispatch(dismissStatusMessage(statusMessageId)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(StatusMessages);

export { connectedComponent as StatusMessages };