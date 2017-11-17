import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field } from 'redux-form';

const LoginForm = ({ handleSubmit, valid, dirty, submitting }) => (
    <form onSubmit={handleSubmit}>
        <div className="input-group">
            <div className="input-group-addon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
            </div>
            <Field
                name="email"
                type="email"
                required
                placeholder="name@domain.cz"
                component="input"
            />
        </div>

        <button className="btn" type="submit"><i className="fa fa-sign-in" aria-hidden="true" /> Log in</button>
    </form>
);
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export { LoginForm };
