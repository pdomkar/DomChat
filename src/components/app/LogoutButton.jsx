import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = ({onClick}) => (
    <a
        onClick={onClick}
    >
        <i className="fa fa-sign-out" aria-hidden="true"/>
    </a>
);

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export { LogoutButton };