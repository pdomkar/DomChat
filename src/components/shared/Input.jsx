import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uuid } from '../../utils/uuidGenerator';

class Input extends React.Component {
    static propTypes = {
        screenReaderName: PropTypes.string.isRequired,
        iconName: PropTypes.string,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        required: PropTypes.bool,
        name: PropTypes.string.isRequired,
        maxLength: PropTypes.string,
        refField: PropTypes.any,
        rows: PropTypes.string,
        cols: PropTypes.string,
        input: PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        meta: PropTypes.shape({
            error: PropTypes.string,
            touched: PropTypes.bool.isRequired,
        }).isRequired,
    };

    render ()  {
        const labelGroupClass = (touched, error) => {
            return classNames({
                'error': touched && error,
                'success': touched && !error
            });
        };

        const inputGroupClass = (touched, error) => {
            return classNames({
                'error': touched && error,
                'success': touched && !error
            });
        };

        const inputId = `${this.props.input.name}-${uuid()}`;
        return (
            <div className="form-group">
                <label className={labelGroupClass(this.props.meta.touched, this.props.meta.error)} htmlFor={inputId}>
                    {this.props.screenReaderName}
                </label>
                {this.props.type !== 'textarea' && <input
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    id={inputId}
                    readOnly={this.props.readOnly}
                    required={this.props.required}
                    maxLength={this.props.maxLength}
                    ref = {this.props.refField}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />}
                {this.props.type === 'textarea' && <textarea
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={inputId}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    readOnly={this.props.readOnly}
                    required={this.props.required}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />}
                <div className="error-box">
                    {this.props.meta.touched && this.props.meta.error && <div className="error-message">{this.props.meta.error}</div>}
                </div>
            </div>
        );
    }

}

export { Input };