import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { PROFILE_EDIT, LOGIN, ROOT, CHANNELS } from '../../constants/routes';
import { CHANNELS_DETAIL } from '../../constants/routes';

const convertRouteToTitle = (route) => {
    switch(route) {
        case ROOT:
        case CHANNELS:
            return 'Channels';
        case CHANNELS_DETAIL:
            return 'Channel';
        case PROFILE_EDIT:
            return 'Profile';
        case LOGIN:
            return 'Login';
        default:
            return '';
    }
};

const HeadInHelmet = ({ route }) => (
    <Helmet>
        <title>{convertRouteToTitle(route)} - DomChat</title>
    </Helmet>
);

HeadInHelmet.propTypes = {
    route: PropTypes.string.isRequired,
};

export { HeadInHelmet };