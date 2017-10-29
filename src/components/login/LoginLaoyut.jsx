import * as React from 'react';

import { LoginForm } from './LoginForm.jsx';

const LoginLayout = () => (
    <div className="login-layout">
        <div className="login-box">
            <h1>
                DomChat
            </h1>
            <h4>
                PV247 - 2017 - xdomkar
            </h4>

            <LoginForm />
        </div>
    </div>
);
export { LoginLayout };