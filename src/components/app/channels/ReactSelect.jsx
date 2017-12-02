import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class ReactSelect extends React.Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        multi: PropTypes.bool.isRequired,
    };


    render() {
        console.log(this.props.options);
        return (
            <Select
                options={this.props.options}
                {...this.props.input}
                multi={this.props.multi}
                onBlur={() => this.props.input.onBlur(this.props.input.value)}
            />
        );
    }
}

export { ReactSelect };