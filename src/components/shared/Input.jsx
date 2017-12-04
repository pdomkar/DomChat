import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends React.Component {
    static propTypes = {
        screenReaderName: PropTypes.string.isRequired,
        iconName: PropTypes.string,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        required: PropTypes.bool,
        name: PropTypes.string,
        maxLength: PropTypes.string,
        input: PropTypes.shape({
            value: PropTypes.string.isRequired,
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

        console.log(this.props.meta);

        return (
            <div className="form-group">
                <label className={labelGroupClass(this.props.meta.touched, this.props.meta.error)} htmlFor={this.props.name}>
                    {this.props.screenReaderName}
                </label>
                {this.props.type !== 'textarea' && <input
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    id={this.props.name}
                    readOnly={this.props.readOnly}
                    required={this.props.required}
                    maxLength={this.props.maxLength}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />}
                {this.props.type === 'textarea' && <textarea
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={this.props.name}
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