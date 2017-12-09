import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { List } from 'immutable';
import { ReactSelect } from '../../../../shared/ReactSelect';
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
        handleSubmit: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        dirty: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.onFetchUsers();

        const nameInput = this.nameInput.getRenderedComponent().refs.nameInput;
        const textLength = nameInput.value.length;
        nameInput.focus();
        nameInput.setSelectionRange(textLength, textLength);
    }

    _handleEscKey = (e) => {
        if(e.keyCode === 27) {    //ESC key
            this.props.onCancel();
        }
    };

    validateName = validateNonEmptyness('Name');
    validateUsers = validateNonEmptyness('Users');
    maxLength = 20;
    maxLength20 = validateMaxLength(this.maxLength);


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
                                maxLength={this.maxLength+''}
                                component={Input}
                                validate={[this.validateName, this.maxLength20]}
                                withRef
                                ref={(input) => { this.nameInput = input; }}
                                refField="nameInput"
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
                            />
                            <Field
                                placeholder="Select users who has access to channel …"
                                screenReaderName="Users"
                                name="users"
                                id="users"
                                multi={true}
                                options={options}
                                component={ReactSelect}
                                validate={[this.validateUsers]}
                            />
                            <button type="submit" disabled={this.props.submitting || !this.props.valid}>
                                {this.props.submitButtonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}