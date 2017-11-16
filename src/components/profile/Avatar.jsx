import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({toggleOverlay}) => (
    <div
        className="avatar-pane-1"
        onMouseEnter={toggleOverlay}
        onDragOver={toggleOverlay}
    >
        <img src="./assets/no-profile.png" />
    </div>
);

Avatar.propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
};

export { Avatar };