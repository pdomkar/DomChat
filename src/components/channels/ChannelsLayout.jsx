import * as React from 'react';

import {Header } from './channel/header/Header.jsx';
import {Body } from './channel/body/Body.jsx';
import { LogoutButton } from '../../containers-redux/app/LogoutButton.jsx';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment.jsx';

import {Link} from 'react-router-dom';

import { ChannelListRedux } from '../../containers-redux/channels/channel-list/ChannelList';


const ChannelsLayout = () => (
    <div className="channels-layout">
        <HeadInHelmet />
        <div className="sidebar-container">
            <div className="header">
                <h2>DomChat</h2>
                <span>petrdomkar</span>
                <Link to="/profile"><i className="fa fa-user" aria-hidden="true"/></Link>
                <LogoutButton />
            </div>
            <div className="body">
                <ChannelListRedux />
            </div>
        </div>
        <div className="channel">
            <Header/>
            <Body/>
        </div>
    </div>
);
export { ChannelsLayout };