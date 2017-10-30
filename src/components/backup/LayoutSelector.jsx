import * as React from 'react';
// import { Route } from 'react-router-dom';
// import { LoginLayout } from './login/LoginLaoyut.jsx';
import { ChannelsLayout } from './channels/ChannelsLayout.jsx';
// import { ProfileLayout } from './profile/ProfileLayout.jsx';

import './main.less';


const LayoutSelector = () => (
    <div>
        <ChannelsLayout/>
        {/*<Route exact path="/" component={LoginLayout}/>*/}
        {/*<Route exact path="/channels" component={ChannelsLayout}/>*/}
        {/*<Route exact path="/profile" component={ProfileLayout}/>*/}
    </div>
);

export { LayoutSelector };