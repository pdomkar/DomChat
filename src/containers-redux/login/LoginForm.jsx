import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../containers/login/LoginForm';
import { authenticateUser } from '../../actions/shared/authenticateUser';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (email) => dispatch(authenticateUser(ownProps.from, email)),
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(LoginForm);

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };