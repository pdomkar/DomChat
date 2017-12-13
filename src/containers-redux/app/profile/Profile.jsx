import { connect } from 'react-redux';
import { ProfileLayout } from '../../../components/app/profile/ProfileLayout';
import { fetchUserDetails } from '../../../actions/profile';

const mapDispatchToProps = (dispatch) => ({
    fetchDetails: () => dispatch(fetchUserDetails())
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(ProfileLayout);

export { connectedComponent as ProfileLayout };