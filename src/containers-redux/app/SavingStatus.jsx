import { connect } from 'react-redux';
import { SavingStatus } from '../../components/app/SavingStatus.jsx';

const mapStateToProps = (state) => ({
    watchedEntity: state.channelApp.channels,
    isSaving: state.channelApp.isSaving,
});


const enhancer = connect(mapStateToProps, undefined);
const connectedComponent = enhancer(SavingStatus);

export { connectedComponent as SavingStatus };