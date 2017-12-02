import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { LoginLayout } from './login/LoginLaoyut';
import { ChannelsLayout } from '../containers-redux/app/channels/ChannelsLayout';
import { ProfileLayout } from '../containers-redux/app/profile/Profile';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import {
    ROOT,
    PROFILE,
    CHANNELS,
    LOGIN,
    CHANNELS_DETAIL
} from '../constants/routes';
import { SavingStatus } from '../containers-redux/app/SavingStatus';


const LayoutSelector = ({ isAuthenticated }) => [
    <SavingStatus key="savingStatus"/>,
    <Switch key="switch">
        <Route exact path={LOGIN} component={LoginLayout} />
        <AuthenticatedRoute exact path={ROOT} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={CHANNELS} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={CHANNELS_DETAIL} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={PROFILE} component={ProfileLayout} isAuthenticated={isAuthenticated} />
    </Switch>
];
LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };