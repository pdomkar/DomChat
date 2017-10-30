import * as React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = () => (
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

        <Link to="/channels"><button type="button" className="btn btn-success"><i className="fa fa-sign-in" aria-hidden="true"/> Log in</button></Link>
    </form>
);
export { LoginForm };