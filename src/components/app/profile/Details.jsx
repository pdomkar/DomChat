import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from '../../shared/Input';
import {
    validateMaxLength,
    validateNonEmptyness
} from '../../../utils/validation';

export class Details extends React.PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const nameInput = this.nameInput.getRenderedComponent().refs.nameInput;
        const textLength = nameInput.value.length;
        nameInput.focus();
        nameInput.setSelectionRange(textLength, textLength);
    }

    validateName = validateNonEmptyness('name');
    maxLength = 20;
    maxLength20 = validateMaxLength(this.maxLength);

    render() {
        return (
            <div className="details">
                <form onSubmit={this.props.handleSubmit}>
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
                        maxLength={this.maxLength+''}
                        validate={[this.validateName, this.maxLength20]}
                        withRef
                        ref={(input) => { this.nameInput = input; }}
                        refField="nameInput"
                    />
                    <Field
                        type="text"
                        placeholder="Full name"
                        screenReaderName="Full name"
                        name="fullname"
                        component={Input}
                        maxLength={this.maxLength+''}
                        validate={this.maxLength20}
                    />
                    <Field
                        type="text"
                        placeholder="What I do"
                        screenReaderName="What I do"
                        name="whatIDo"
                        component={Input}
                        maxLength={this.maxLength+''}
                        validate={this.maxLength20}
                    />
                    <button type="submit" disabled={this.props.submitting || !this.props.valid}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}