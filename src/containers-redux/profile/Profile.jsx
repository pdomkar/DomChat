import { connect } from 'react-redux';
import { ProfileLayout } from '../../components/profile/ProfileLayout';
import { fetchUserDetails } from '../../actions/profile/fetchUserDetails';

const mapDispatchToProps = (dispatch) => ({
    fetchDetails: () => dispatch(fetchUserDetails())
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(ProfileLayout);

export { connectedComponent as ProfileLayout };