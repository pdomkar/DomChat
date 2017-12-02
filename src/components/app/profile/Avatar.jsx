import React from 'react';
import PropTypes from 'prop-types';


const Avatar = ({uri, toggleOverlay}) => (
    <div
        className="avatar"
        onMouseEnter={toggleOverlay}
        onDragOver={toggleOverlay}
    >
        <div className="title">Avatar</div>
        {uri ? <img src={uri} alt="Profile picture"/> : <img src="assets/no-profile.png" alt="no image"/>}
    </div>
);

Avatar.propTypes = {
    uri: PropTypes.string,
    toggleOverlay: PropTypes.func.isRequired,
};

export { Avatar };