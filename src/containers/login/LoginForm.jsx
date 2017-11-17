import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm as LoginFormComponent } from '../../components/login/LoginForm';

export class LoginForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    _onEmailChange = (event) => {
        const value = event.target.value;

        this.setState(prevState => ({
            email: {
                ...prevState.email,
                email: value
            }
        }));
    };

    render() {
        return (
            <LoginFormComponent
                editedEmail={this.state.email}
                onEmailChange={this._onEmailChange}
                onSubmit={() => this.props.onSubmit(this.state.email)}
            />
        );
    }
}