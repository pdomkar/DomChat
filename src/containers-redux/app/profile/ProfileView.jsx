import { connect } from 'react-redux';

import { ProfileViewLayout } from '../../../components/app/profile/ProfileViewLayout';
import { fetchProfileView } from '../../../actions/profile';

const mapStateToProps = (state) => {
    return ({
        profileView: state.profile.profileView,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProfileView: () => dispatch(fetchProfileView(ownProps.computedMatch.params.email)),
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = stateEnhancer(ProfileViewLayout);

export { connectedComponent as ProfileViewLayout };