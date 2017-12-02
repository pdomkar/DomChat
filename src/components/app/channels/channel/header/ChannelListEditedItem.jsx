import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { List } from 'immutable';
import { ReactSelect } from '../../ReactSelect';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        editedChannel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }).isRequired,
        submitDisabled: PropTypes.bool,
        submitButtonText: PropTypes.string.isRequired,
        users:  PropTypes.instanceOf(List).isRequired,
        email: PropTypes.string.isRequired,
        onFetchUsers: PropTypes.func.isRequired,
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

    componentWillMount() {

        this.props.onFetchUsers();
    }

    _handleEscKey = (e) => {
        if(e.keyCode === 27) {    //ESC key
            this.props.onCancel();
        }
    };

    handleSelectChange(val) {
        console.log('You\'ve selected:', val);
    }

    render() {
        const users = this.props.users.map(x => ({value: x.email, label: `<${x.email}> ${x.name || ''}`}));
        const options = users.filterNot(op => op.value === this.props.email).toArray();


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
                    <label htmlFor="description">Popis </label>
                    <Field
                        type="text"
                        name="description"
                        id="description"
                        rows="5"
                        cols="20"
                        // value={this.props.editedChannel.name}
                        // onChange={this.props.onNameChange}
                        // ref={(input) => { this.nameInput = input; }}
                        // onKeyDown={this._handleEscKey}
                        component="textarea"
                    />
                </div>
                <div>
                    <label htmlFor="users">Uživatelé </label>
                    <Field
                        name="users"
                        id="users"
                        multi={true}
                        options={options}
                        component={ReactSelect}
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