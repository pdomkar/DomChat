import { connect } from 'react-redux';
import { SavingStatus } from '../../components/app/SavingStatus.jsx';
import { saveItems } from '../../actions/channels/saveItems';

const mapStateToProps = (state) => ({
    watchedEntity: state.channelApp.channels,
    isSaving: state.channelApp.isSaving,
});

const mapDispatchToProps = (dispatch) => ({
    save: () => dispatch(saveItems())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(SavingStatus);

export { connectedComponent as SavingStatus };