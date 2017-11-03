import React from 'react';
import PropTypes from 'prop-types';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        editedChannel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        submitDisabled: PropTypes.bool,
        submitButtonText: PropTypes.string.isRequired,
        onNameChange: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    componentDidMount(){
        const textLength = this.nameInput.value.length;

        this.nameInput.focus();
        this.nameInput.setSelectionRange(textLength, textLength);
    }

    _handleEscKey = (e) => {
        if(e.keyCode === 27) {    //ESC key
            this.props.onCancel();
        }
    };

    render() {
        return (
        <div className="modalWrapper">
            <a onClick={this.props.onCancel}><i className="fa fa-times" aria-hidden="true"/></a>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name">Název</label>
                    <input
                        type="text"
                        id="name"
                        value={this.props.editedChannel.name}
                        onChange={this.props.onNameChange}
                        ref={(input) => { this.nameInput = input; }}
                        onKeyDown={this._handleEscKey}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="btn"
                        onClick={this.props.onSubmit}
                        disabled={this.props.submitDisabled}
                    >
                        {this.props.submitButtonText}
                    </button>
                </div>
            </form>
        </div>
        );
    }
}