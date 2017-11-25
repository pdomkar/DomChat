import * as React from 'react';
import PropTypes from 'prop-types';
import {Header } from './channel/header/Header.jsx';
import {Body } from './channel/body/Body.jsx';
import { LogoutButton } from '../../containers-redux/app/LogoutButton.jsx';
import { HeadInHelmet } from '../../containers-redux/shared/HeadInHelment.jsx';

import {Link} from 'react-router-dom';

import { ChannelListRedux } from '../../containers-redux/channels/ChannelList';
import { Errors } from '../../containers-redux/shared/Errors';
import { ChannelLayout } from '../../containers-redux/channels/channel/ChannelLayout';
import List from 'immutable';
import { PROFILE } from '../../constants/routes';


const ChannelsLayout = (props) => {
    const selectChannel =  props.list.find(channel => channel.id === props.channelId);

    return (
        <div className="channels-layout">
            <HeadInHelmet />
            <div className="sidebar-container">
                <div className="header">
                    <h2>DomChat</h2>
                    <span>{props.details.name}</span>
                    <Link to={PROFILE}><i className="fa fa-user" aria-hidden="true" /></Link>
                    <LogoutButton />
                </div>
                <div className="body">
                    <ChannelListRedux list={props.list} />
                </div>
            </div>
            <ChannelLayout channel={selectChannel} />
            <Errors channelId={props.channelId} />
        </div>
    );
};

ChannelsLayout.propTypes = {
    details: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    channelId: PropTypes.string.isRequired,
    list: PropTypes.instanceOf(List).isRequired,
};

export { ChannelsLayout };