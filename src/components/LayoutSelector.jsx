import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
    Route,
    Switch
} from 'react-router-dom';
import { LoginLayout } from './login/LoginLaoyut';
import { ChannelsLayout } from './channels/ChannelsLayout';
import { ProfileLayout } from '../containers-redux/profile/Profile';
import { AuthenticatedRoute } from './app/AuthenticatedRoute';
import { ROOT, PROFILE, CHANNELS, LOGIN } from '../constants/routes';
import { SavingStatus } from '../containers-redux/app/SavingStatus';


const LayoutSelector = ({ isAuthenticated }) => (
    <div>
        <SavingStatus />
        <Switch>
            <Route exact path={LOGIN} component={LoginLayout} />
            <AuthenticatedRoute exact path={ROOT} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
            <AuthenticatedRoute exact path={CHANNELS} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
            <AuthenticatedRoute exact path={CHANNELS} component={ChannelsLayout} isAuthenticated={isAuthenticated} />
            <AuthenticatedRoute exact path={PROFILE} component={ProfileLayout} isAuthenticated={isAuthenticated} />
        </Switch>
    </div>
);
LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };