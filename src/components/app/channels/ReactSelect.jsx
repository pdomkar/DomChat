import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import classNames from 'classnames';


class ReactSelect extends React.Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        multi: PropTypes.bool.isRequired,
    };


    render() {
        console.log(this.props.options);
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

        const opts = this.props.options.map((item) => <option value={item.value} key={item.value}>{item.label}</option>);
        return (
            <div className="form-group">
                <label className={labelGroupClass(this.props.meta.touched, this.props.meta.error)} htmlFor={this.props.name}>
                    {this.props.screenReaderName}
                </label>
                <select {...this.props.input} multiple id={this.props.name}>
                    {opts}
                </select>
                {/*<Select*/}
                    {/*options={this.props.options}*/}
                    {/*{...this.props.input}*/}
                    {/*multi={this.props.multi}*/}
                    {/*onBlur={() => this.props.input.onBlur(this.props.input.value)}*/}
                    {/*className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}*/}
                {/*/>*/}
                <div className="error-box">
                    {this.props.meta.touched && this.props.meta.error && <div className="error-message">{this.props.meta.error}</div>}
                </div>
            </div>
        );
    }
}

export { ReactSelect };