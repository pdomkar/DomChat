import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {} from '../../constants/routes';
import { PROFILE, LOGIN, ROOT, CHANNELS } from '../../constants/routes';

const convertRouteToTitle = (route) => {
    switch(route) {
        case ROOT:
        case CHANNELS:
            return 'Channels';
        case PROFILE:
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