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

        console.log(this.props.input);

        return (
            <div className="form-group">
                <label className={labelGroupClass(this.props.meta.touched, this.props.meta.error)} htmlFor={this.props.name}>
                    {this.props.screenReaderName}
                </label>
                <input
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    id={this.props.name}
                    readOnly={this.props.readOnly}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />
                <div className="error-box">
                    {this.props.meta.touched && this.props.meta.error && <div className="error-message">{this.props.meta.error}</div>}
                </div>
            </div>
        );
    }

}

export { Input };