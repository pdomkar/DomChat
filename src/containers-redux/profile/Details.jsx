import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Details } from '../../components/profile/Details';
import { updateProfileDetails } from '../../actions/profile/actionCreators';

const mapStateToProps = (state) => ({
    initialValues: state.profile.details
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (details) => dispatch(updateProfileDetails(details)),
});

const formConfig = {
    form: 'DetailsForm',
    touchOnChange: true
};

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(Details));

export { connectedComponent as Details };