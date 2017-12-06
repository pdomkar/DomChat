import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
class StatusMessage extends React.PureComponent {
    static propTypes = {
        statusMessage: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            error: PropTypes.shape({
                statusText: PropTypes.string,
                statusCode: PropTypes.string,
            }).isRequired,
        }).isRequired,
        onClick: PropTypes.func.isRequired,
    };

    _onClick = () => this.props.onClick(this.props.statusMessage.id);

    render() {
        const alertClasses = (errorCode) => {console.log(errorCode); return classNames({
            'alert': true,
            'success': !errorCode,
            'error': errorCode,
        })};

        return (
            <div
                className={alertClasses(this.props.statusMessage.error.statusCode)} role="alert"
            >
                {this.props.statusMessage.text}
                <button
                    type="button"
                    aria-label="Close"
                    onClick={this._onClick}
                >
                    <i className="fa fa-times" aria-hidden="true" />
                </button>
            </div>
        );
    }
}

const StatusMessages = ({statusMessages, onDismissClick}) =>(

    (statusMessages || [])
    && statusMessages.map(statusMessage => (
        <StatusMessage key={statusMessage.id} statusMessage={statusMessage} onClick={onDismissClick}/>
    ))
);

StatusMessages.propTypes = {
    statusMmessages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        error: PropTypes.shape({
            statusText: PropTypes.string,
            statusCode: PropTypes.string,
        }).isRequired,
    }).isRequired),
    onDismissClick: PropTypes.func.isRequired,
};


export { StatusMessages };