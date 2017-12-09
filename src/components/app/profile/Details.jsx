import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from '../../shared/Input';
import {
    validateMaxLength,
    validateNonEmptyness
} from '../../../utils/validation';

const validateName = validateNonEmptyness('name');
const lengthMax = 20;
const maxLength20 = validateMaxLength(lengthMax);


const Details = ({ handleSubmit, valid, submitting }) => {return(
    <div className="details">
        <form onSubmit={handleSubmit}>
            <Field
                type="email"
                placeholder="jmeno@domena.cz"
                screenReaderName="E-mail"
                name="email"
                component={Input}
                readOnly
                required
            />
            <Field
                type="text"
                placeholder="name"
                screenReaderName="Name"
                name="name"
                component={Input}
                required
                maxLength={''.lengthMax}
                validate={[validateName, maxLength20]}
            />
            <Field
                type="text"
                placeholder="Full name"
                screenReaderName="Full name"
                name="fullname"
                component={Input}
                maxLength={''.lengthMax}
                validate={maxLength20}
            />
            <Field
                type="text"
                placeholder="What I do"
                screenReaderName="What I do"
                name="whatIDo"
                component={Input}
                validate={maxLength20}
            />
            <button type="submit" disabled={submitting || !valid}>
                Save
            </button>
        </form>
    </div>
)};

Details.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export { Details };