import * as React from 'react';

import { LoginForm } from '../../containers-redux/login/LoginForm.jsx';
import { CHANNELS } from '../../constants/routes';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment';

const LoginLayout = ({from}) => {
    const originalLocation = from || { pathname: CHANNELS };

    return [
        <HeadInHelmet key="head" />,
        <div className="login-layout" key="form">
            <div className="login-box">
                <h1>
                    DomChat
                </h1>
                <h4>
                    PV247 - 2017 - xdomkar
                </h4>

                <LoginForm from={originalLocation} />
            </div>
        </div>,
    ];
};
export { LoginLayout };