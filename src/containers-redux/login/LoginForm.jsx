import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm';
import { authenticateUser } from '../../actions/shared/authenticateUser';
import { LOGIN_FORM_NAME } from '../../constants/formNames';
import { reduxForm } from 'redux-form';


const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (email) => dispatch(authenticateUser(ownProps.from, email)),
});


const formConfig = {
    form: LOGIN_FORM_NAME,
    touchOnChange: true,
    enableReinitialize: true,
};

const stateEnhancer = connect(undefined, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(LoginForm));

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };