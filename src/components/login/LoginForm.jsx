import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';

const inputGroupIconClass = (touched, error) => {
    return classNames({
        'input-group-icon': true,
        'error': touched && error,
        'success': touched && !error
    });
};

const inputGroupInputClass = (touched, error) => {
    return classNames({
        'input-group-input': true,
        'error': touched && error,
        'success': touched && !error
    });
};


const renderField = ({ input, placeholder, type, meta: { touched, error } }) => [
    <div className="input-group" key="input">
        <label className={inputGroupIconClass(touched, error)} htmlFor={input.name}>
            <i className="fa fa-envelope-o" aria-hidden="true" />
        </label>
        <div className={inputGroupInputClass(touched, error)}>
            <input {...input} placeholder={placeholder} type={type} id={input.name}/>
        </div>
    </div>,
    <div className="error-box" key="error">
        {touched && error && <div className="error-message">{error}</div>}
    </div>
];

const LoginForm = ({handleSubmit, valid, pristine, dirty, submitting }) => (
    <form onSubmit={handleSubmit}>
        <Field
            name="email"
            type="email"
            required
            placeholder="name@domain.cz"
            component={renderField}
        />

        <button className="login-btn" type="submit" disabled={submitting || pristine || !valid}>
            Log in <i className="fa fa-sign-in" aria-hidden="true" />
        </button>
    </form>
);
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export { LoginForm };
