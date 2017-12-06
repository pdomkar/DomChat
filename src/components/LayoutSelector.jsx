import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { LoginLayout } from './login/LoginLaoyut';
import { ChannelsLayout } from '../containers-redux/app/channels/ChannelsLayout';
import { ProfileLayout } from '../containers-redux/app/profile/Profile';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import {
    ROOT,
    PROFILE_EDIT,
    CHANNELS,
    LOGIN,
    CHANNELS_DETAIL,
    PROFILE_VIEW
} from '../constants/routes';
import { SavingStatus } from '../containers-redux/app/SavingStatus';
import { ProfileViewLayout } from '../containers-redux/app/profile/ProfileView';


const LayoutSelector = ({ isAuthenticated }) => [
    <SavingStatus key="savingStatus"/>,
    <Switch key="switch">
        <Route exact path={LOGIN} component={LoginLayout} />
        <AuthenticatedRoute exact path={ROOT} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={CHANNELS} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={CHANNELS_DETAIL} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={PROFILE_EDIT} component={ProfileLayout} isAuthenticated={isAuthenticated} />
        <AuthenticatedRoute exact path={PROFILE_VIEW} component={ProfileViewLayout} isAuthenticated={isAuthenticated} />
    </Switch>
];
LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };