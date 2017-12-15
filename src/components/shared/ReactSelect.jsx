import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import classNames from 'classnames';


class ReactSelect extends React.Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        multi: PropTypes.bool.isRequired,
        placeholder: PropTypes.string,
        screenReaderName: PropTypes.string.isRequired,
        input: PropTypes.shape({
            onBlur: PropTypes.func,
            value: PropTypes.string,
        }),
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string,
        })
    };


    render() {
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

        return (
            <div className="form-group">
                <label className={labelGroupClass(this.props.meta.touched, this.props.meta.error)}>
                    {this.props.screenReaderName}
                </label>
                <Select
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                    {...this.props.input}
                    multi={this.props.multi}
                    onBlur={() => this.props.input.onBlur(this.props.input.value)}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />
                <div className="error-box">
                    {this.props.meta.touched && this.props.meta.error && <div className="error-message">{this.props.meta.error}</div>}
                </div>
            </div>
        );
    }
}

export { ReactSelect };