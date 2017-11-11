import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from './Input.jsx';
import { UpdatePane } from './UpdatePane';
import {
    validateNonEmptyness,
} from '../../utils/validation';
import {SAVEABLE,INVALID,NOT_CHANGED} from '../../constants/formStates';

const validateName = validateNonEmptyness('name');

const getFormState = (dirty, valid) => {
    if(!dirty) {
        return NOT_CHANGED;
    }

    if(!valid) {
        return INVALID;
    }

    return SAVEABLE;
};

const Details = ({ handleSubmit, valid, dirty }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <Field
                type="email"
                placeholder="jmeno@domena.cz"
                screenReaderName="E-mail"
                name="email"
                iconName="envelope"
                component={Input}
                readOnly
                required
            />
            <Field
                type="text"
                placeholder="name"
                screenReaderName="Name"
                name="name"
                iconName="user"
                component={Input}
                required
                validate={validateName}
            />
            <UpdatePane formState={getFormState(dirty, valid)}/>
        </form>
    </div>
);

Details.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
};

export { Details };