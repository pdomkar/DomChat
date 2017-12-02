import React from 'react';
import PropTypes from 'prop-types';
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


export const RenderField = ({ input, placeholder, readOnly, iconName, type, meta: { touched, error } }) => {console.log(input);return [
    <div className="input-group" key="input">
        <label className={inputGroupIconClass(touched, error)} htmlFor={input.name}>
            <i className={`fa fa-${iconName}`} aria-hidden="true" />
        </label>
        <div className={inputGroupInputClass(touched, error)}>
            <input {...input} placeholder={placeholder} readOnly={readOnly} type={type} id={input.name}/>
        </div>
    </div>,
    <div className="error-box" key="error">
        {touched && error && <div className="error-message">{error}</div>}
    </div>
]};