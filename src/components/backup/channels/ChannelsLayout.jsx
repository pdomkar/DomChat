import * as React from 'react';

import {Sidebar } from './sidebar/Sidebar.jsx';
import {Header } from './channel/header/Header.jsx';
import {Body } from './channel/body/Body.jsx';


const ChannelsLayout = () => (
    <div className="channels-layout">
        <Sidebar/>
        <div className="channel">
            <Header/>
            <Body/>
        </div>
    </div>
);
export { ChannelsLayout };