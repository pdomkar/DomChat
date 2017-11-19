import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        editedChannel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        submitDisabled: PropTypes.bool,
        submitButtonText: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    // componentDidMount(){
    //     // const textLength = this.nameInput.value.length;
    //     //
    //     // this.nameInput.focus();
    //     // this.nameInput.setSelectionRange(textLength, textLength);
    // }

    _handleEscKey = (e) => {
        if(e.keyCode === 27) {    //ESC key
            this.props.onCancel();
        }
    };

    render() {
        return (
        <div className="modalWrapper">
            <a onClick={this.props.onCancel}><i className="fa fa-times" aria-hidden="true"/></a>
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor="name">Název </label>
                    <Field
                        type="text"
                        name="name"
                        id="name"
                        // value={this.props.editedChannel.name}
                        // onChange={this.props.onNameChange}
                        // ref={(input) => { this.nameInput = input; }}
                        // onKeyDown={this._handleEscKey}
                        component="input"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn"
                        // disabled={!this.props.dirty && !this.props.valid}
                    >
                        {this.props.submitButtonText}
                    </button>
                </div>
            </form>
        </div>
        );
    }
}