import React from 'react';
import PropTypes from 'prop-types';
import AdvancedLoader from 'react-loader-advanced';

import { SavingSpinner } from './SavingSpinner.jsx';

const Loader = ({ children, isLoading, contentStyle }) => (
    <AdvancedLoader
        contentBlur={2}
        show={isLoading}
        message={<SavingSpinner loader={true} />}
        backgroundStyle={{ borderRadius: '10px', heihgt: 'auto', background: 'transparent'}}
        contentStyle={contentStyle || {}}
        hideContentOnLoad={false}
    >
        {children}
    </AdvancedLoader>
);

Loader.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired,
    contentStyle: PropTypes.any,
};

export { Loader };