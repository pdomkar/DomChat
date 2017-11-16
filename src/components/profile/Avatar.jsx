import React from 'react';
import PropTypes from 'prop-types';


const Avatar = ({uri, toggleOverlay}) => (
    <div
        className="avatar-pane-1"
        onMouseEnter={toggleOverlay}
        onDragOver={toggleOverlay}
    >
        <img src={uri} alt="Profile picture"/>
    </div>
);

Avatar.propTypes = {
    uri: PropTypes.string,
    toggleOverlay: PropTypes.func.isRequired,
};

export { Avatar };