import * as React from 'react';
import * as PropTypes from 'prop-types';

class LoginForm extends React.PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    render() {
        return (
            <form>
                <div className="input-group">
                    <div className="input-group-addon">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                    </div>
                    <input
                        type="email"
                        required
                        placeholder="name@domain.cz"
                    />
                </div>

                <button className="btn" onClick={this.props.onSubmit}><i className="fa fa-sign-in" aria-hidden="true" /> Log in</button>
            </form>
        );
    }
}
export { LoginForm };