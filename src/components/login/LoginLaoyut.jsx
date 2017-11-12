import * as React from 'react';

import { LoginForm } from '../../containers-redux/login/LoginForm';
import { Loader } from '../../containers-redux/shared/Loader';
import { CHANNELS } from '../../constants/routes';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment';
import { Errors } from '../../containers-redux/shared/Errors';

const LoginLayout = ({from}) => {
    const originalLocation = from || { pathname: CHANNELS };

    return [
        <HeadInHelmet key="head" />,
        <div className="login-layout" key="form">
            <div className="login-box">
                <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                    <h1>
                        DomChat
                    </h1>
                    <h4>
                        PV247 - 2017 - xdomkar
                    </h4>

                    <LoginForm from={originalLocation} />
                </Loader>
            </div>
            <Errors key="errors" />
        </div>,
    ];
};
export { LoginLayout };