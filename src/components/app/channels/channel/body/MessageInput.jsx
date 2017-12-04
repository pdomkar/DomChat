import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MessageInput extends React.Component {
    static propTypes = {
        iconName: PropTypes.string,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
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
        const inputGroupClass = (touched, error) => {
            return classNames({
                'fa fa-comment': true,
                'error': touched && error,
            });
        };

        console.log(this.props.meta);

        return (
            <div>
                <span aria-hidden="true" className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}/>
                <textarea
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={this.props.name}
                    rows={this.props.rows}
                    readOnly={this.props.readOnly}
                    required={this.props.required}
                    className={inputGroupClass(this.props.meta.touched, this.props.meta.error)}
                />
            </div>
        );
    }

}

export { MessageInput };