import * as React from 'react';
import './main.less';
// import { AppLayout } from './app/AppLayout.jsx';
import { LoginLayout } from './login/LoginLaoyut.jsx';

//Zkusit webstorm, udelat router, a browsersync
const LayoutSelector = () => (
    <div>
        <h1>DomChat</h1>
        <LoginLayout/>
    </div>
);

export { LayoutSelector };