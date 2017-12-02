import React from 'react';

import { LoginForm } from '../../containers-redux/login/LoginForm';
import { Loader } from '../../containers-redux/shared/Loader';
import { CHANNELS } from '../../constants/routes';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment';
import { StatusMessages } from '../../containers-redux/shared/StatusMessages';

const LoginLayout = ({from}) => {
    const originalLocation = from || { pathname: CHANNELS };

    return [
        <HeadInHelmet key="head" />,
        <div className="login-layout" key="form">
            <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                <div className="login-box">
                    <h1>
                        DomChat
                    </h1>
                    <h4>
                        PV247 - 2017 - xdomkar
                    </h4>
                    <LoginForm from={originalLocation} />
                </div>
            </Loader>
            <StatusMessages key="messages" />
        </div>,
    ];
};
export { LoginLayout };