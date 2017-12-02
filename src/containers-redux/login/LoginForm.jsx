import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { LoginForm } from '../../components/login/LoginForm';
import { authenticateUser } from '../../actions/shared/authenticateUser';
import { LOGIN_FORM_NAME } from '../../constants/formNames';


const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (email) => dispatch(authenticateUser(ownProps.from, email)),
});

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const formConfig = {
    form: LOGIN_FORM_NAME,
    validate
};

const stateEnhancer = connect(undefined, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(LoginForm));

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };