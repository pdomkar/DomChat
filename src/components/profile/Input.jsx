import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uuid } from '../../utils/uuidGenerator';

class Input extends React.Component {
    static propTypes = {
        screenReaderName: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        required: PropTypes.bool,
        input: PropTypes.shape({
            value: PropTypes.string.isRequired,
        }).isRequired,
        meta: PropTypes.shape({
            error: PropTypes.string,
            touched: PropTypes.bool.isRequired,
            invalid: PropTypes.bool.isRequired,
            valid: PropTypes.bool.isRequired,
        }).isRequired,
    };

    componentWillMount() {
        this.setState({ componentId: uuid() });
    }

    render() {
        const inputName = `input_${this.state.componentId}`;

        const {
            valid,
            invalid,
            touched,
            error: errorMessage
        } = this.props.meta;

        const isValid = valid && touched;
        const isInvalid = invalid && touched;

        const groupClasses = classNames({
            'form-group': true,
            'has-success has-feedback': isValid,
            'has-error has-feedback': isInvalid,
        });
        const feedbackClasses = classNames({
            'fa form-control-feedback': true,
            'fa-star text-danger': !isValid && !isInvalid && this.props.required,
            'fa-ok': isValid,
            'fa-remove': isInvalid,
        });

        return (
            <div className={groupClasses}>
                <div className="input-group" title={isInvalid ? errorMessage : undefined}>
                    <div className="input-group-addon" htmlFor={inputName}>
                        <i className={`fa fa-${this.props.iconName}`} aria-hidden="true" title={this.props.screenReaderName} />
                    </div>
                    <input
                        {...this.props.input}
                        type={this.props.type}
                        required={this.props.required}
                        id={inputName}
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                    />
                    <span
                        className={feedbackClasses}
                        aria-hidden="true"
                        title={errorMessage}
                    >
                    </span>
                </div>
                {invalid && (
                    <span className="sr-only">
                        {errorMessage}
                    </span>
                )}
            </div>
        );
    }

}

export { Input };