import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { List } from 'immutable';
import { ReactSelect } from '../../ReactSelect';
import { MODAL_COMPONENT_CREATE } from '../../../../../constants/common';
import { Input } from '../../../../shared/Input.jsx';
import {
    validateMaxLength,
    validateNonEmptyness
} from '../../../../../utils/validation';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        typeCompopnent: PropTypes.string.isRequired,
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
    };

    constructor(props) {
        super(props);
        console.log("props", props);
    }


    // componentDidMount(){
    //     // const textLength = this.nameInput.value.length;
    //     //
    //     // this.nameInput.focus();
    //     // this.nameInput.setSelectionRange(textLength, textLength);
    // }

    componentDidMount() {
        this.props.onFetchUsers();
    }

    _handleEscKey = (e) => {
        if(e.keyCode === 27) {    //ESC key
            this.props.onCancel();
        }
    };

    validateName = validateNonEmptyness('Name');
    maxLength20 = validateMaxLength(20);


    render() {
        const users = this.props.users.map(x => ({value: x.email, label: `<${x.email}> ${x.name || ''}`}));
        const options = users.filterNot(op => op.value === this.props.email).toArray();

        return (
            <div className="modalWrapper">
                <div className="headerMod">
                    {this.props.typeCompopnent === MODAL_COMPONENT_CREATE ? 'Create new channel' : `Edit channel ${this.props.editedChannel.name}`}
                    <a onClick={this.props.onCancel} className="back"><i className="fa fa-times" aria-hidden="true"/></a>
                </div>
                <div className="bodyMod">
                    <div className="newEditChannelbox">
                        <form onSubmit={this.props.handleSubmit}>
                            <Field
                                type="text"
                                placeholder="Name of channel"
                                screenReaderName="Name"
                                name="name"
                                id="name"
                                maxLength="20"
                                component={Input}
                                validate={[this.validateName, this.maxLength20]}
                                // value={this.props.editedChannel.name}
                                // onChange={this.props.onNameChange}
                                // ref={(input) => { this.nameInput = input; }}
                                // onKeyDown={this._handleEscKey}
                            />
                            <Field
                                type="textarea"
                                placeholder="Description of channel"
                                screenReaderName="Description"
                                name="description"
                                id="description"
                                rows="5"
                                cols="20"
                                component={Input}
                                // value={this.props.editedChannel.name}
                                // onChange={this.props.onNameChange}
                                // ref={(input) => { this.nameInput = input; }}
                                // onKeyDown={this._handleEscKey}
                            />
                            <Field
                                placeholder="Users in channel"
                                screenReaderName="Users"
                                name="users"
                                id="users"
                                multi={true}
                                options={options}
                                component={ReactSelect}
                            />
                            <button type="submit">
                                {this.props.submitButtonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}